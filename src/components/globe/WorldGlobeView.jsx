import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import {
  Globe,
  Compass,
  Layers,
  MapPin,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Play,
  Pause,
  Info,
  ShieldAlert,
  Droplets,
  Mountain,
  ChevronRight,
  X,
  ExternalLink
} from 'lucide-react';
import { GLOBAL_MOUNTAIN_HOTSPOTS, WORLD_WATER_METRICS } from '../../data/globalMountainData';
import { useLanguage } from '../../context/LanguageContext';

// Helper to convert lat/lng to 3D Cartesian coordinates on sphere of radius R
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function WorldGlobeView({
  onDiveToDarjeeling,
  onSwitchToGoogleMap,
  onSwitchToBigMap,
}) {
  const { t, language } = useLanguage();
  const mountRef = useRef(null);

  const [selectedHotspot, setSelectedHotspot] = useState(GLOBAL_MOUNTAIN_HOTSPOTS[0]); // Default to Darjeeling
  const [isRotating, setIsRotating] = useState(true);
  const [isDiving, setIsDiving] = useState(false);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  // References for Three.js state
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const globeGroupRef = useRef(null);
  const cloudsRef = useRef(null);
  const reqIdRef = useRef(null);

  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });

  const targetRotation = useRef({ x: 0.35, y: -2.0 }); // Centered toward Asia / Himalayas
  const currentRotation = useRef({ x: 0.35, y: -2.0 });

  const GLOBE_RADIUS = 10;

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x030612);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 2. Deep Space Starfield
    const starCount = 1800;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 90 + Math.random() * 110;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const tint = 0.75 + Math.random() * 0.25;
      starColors[i * 3] = tint * 0.9;
      starColors[i * 3 + 1] = tint * 0.95;
      starColors[i * 3 + 2] = tint;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const starField = new THREE.Points(starGeom, starMaterial);
    scene.add(starField);

    // 3. Globe Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    globeGroup.rotation.x = currentRotation.current.x;
    globeGroup.rotation.y = currentRotation.current.y;
    scene.add(globeGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // 4. Earth Sphere
    const earthGeom = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.65,
      metalness: 0.1,
    });

    textureLoader.load(
      '/assets/earth_day.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        earthMat.map = tex;
        earthMat.needsUpdate = true;
      },
      undefined,
      (err) => console.warn('Earth texture load fallback:', err)
    );

    const earthMesh = new THREE.Mesh(earthGeom, earthMat);
    globeGroup.add(earthMesh);

    // 5. Cloud Layer
    const cloudsGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.018, 64, 64);
    const cloudsMat = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      roughness: 1.0,
    });

    textureLoader.load(
      '/assets/earth_clouds.png',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        cloudsMat.map = tex;
        cloudsMat.needsUpdate = true;
      },
      undefined,
      (err) => console.warn('Cloud texture load fallback:', err)
    );

    const cloudsMesh = new THREE.Mesh(cloudsGeom, cloudsMat);
    cloudsRef.current = cloudsMesh;
    globeGroup.add(cloudsMesh);

    // 6. Atmospheric Rim Glow
    const atmosGeom = new THREE.SphereGeometry(GLOBE_RADIUS * 1.04, 48, 48);
    const atmosMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        color: { value: new THREE.Color(0x00f5ff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.8);
          gl_FragColor = vec4(color, intensity * 0.7);
        }
      `,
    });
    const atmosMesh = new THREE.Mesh(atmosGeom, atmosMat);
    scene.add(atmosMesh);

    // 7. Global Hotspot 3D Pins
    const pinObjects = [];
    GLOBAL_MOUNTAIN_HOTSPOTS.forEach((spot) => {
      const pos = latLngToVector3(spot.coords.lat, spot.coords.lng, GLOBE_RADIUS);
      const isPilot = spot.isFeatured;

      const pinGroup = new THREE.Group();
      pinGroup.position.copy(pos);
      pinGroup.lookAt(0, 0, 0);

      // Pin Head Sphere
      const pinGeom = new THREE.SphereGeometry(isPilot ? 0.38 : 0.22, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({
        color: isPilot ? 0xf59e0b : 0x00f5ff,
      });
      const pinMesh = new THREE.Mesh(pinGeom, pinMat);
      pinMesh.position.z = isPilot ? 0.5 : 0.3;
      pinMesh.userData = { hotspot: spot };
      pinGroup.add(pinMesh);

      // Light Stem
      const stemGeom = new THREE.CylinderGeometry(0.04, 0.04, isPilot ? 0.8 : 0.4, 8);
      const stemMat = new THREE.MeshBasicMaterial({
        color: isPilot ? 0xfbbf24 : 0x38bdf8,
        transparent: true,
        opacity: 0.8,
      });
      const stemMesh = new THREE.Mesh(stemGeom, stemMat);
      stemMesh.rotation.x = Math.PI / 2;
      stemMesh.position.z = isPilot ? 0.2 : 0.1;
      pinGroup.add(stemMesh);

      // Outer Pulsing Ripple Ring (Special for Darjeeling Pilot)
      if (isPilot) {
        const ringGeom = new THREE.RingGeometry(0.45, 0.65, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xf59e0b,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.75,
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.position.z = 0.52;
        pinGroup.add(ringMesh);
      }

      globeGroup.add(pinGroup);
      pinObjects.push(pinMesh);
    });

    // 8. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
    sunLight.position.set(30, 20, 25);
    scene.add(sunLight);

    const backRimLight = new THREE.DirectionalLight(0x00f5ff, 0.6);
    backRimLight.position.set(-30, -10, -25);
    scene.add(backRimLight);

    // 9. Animation Loop
    let lastTime = performance.now();
    const animate = (time) => {
      reqIdRef.current = requestAnimationFrame(animate);

      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Auto rotation when enabled and not dragging
      if (isRotating && !isDragging.current) {
        targetRotation.current.y += delta * 0.08;
      }

      // Smooth damped rotation interpolation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;

      globeGroup.rotation.x = currentRotation.current.x;
      globeGroup.rotation.y = currentRotation.current.y;

      // Rotate cloud layer slightly faster
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += delta * 0.03;
      }

      renderer.render(scene, camera);
    };

    reqIdRef.current = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  // Handle Drag / Spin on Globe
  const handleMouseDown = (e) => {
    // Only drag on left click and ignore click on UI overlays
    if (e.button !== 0 || e.target.closest('.globe-ui-interactive')) return;
    isDragging.current = true;
    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;
    prevMousePos.current = { x: e.clientX, y: e.clientY };

    targetRotation.current.y += deltaX * 0.005;
    targetRotation.current.x = Math.max(-1.1, Math.min(1.1, targetRotation.current.x + deltaY * 0.005));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Zoom with wheel
  const handleWheel = (e) => {
    if (!cameraRef.current) return;
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.02;
    cameraRef.current.position.z = Math.max(16, Math.min(48, cameraRef.current.position.z + zoomDelta));
  };

  // Center Globe on a chosen hotspot
  const centerOnHotspot = (spot) => {
    setSelectedHotspot(spot);
    setIsRotating(false);

    // Calculate rotation to face the hotspot toward camera (+Z axis)
    const latRad = (spot.coords.lat * Math.PI) / 180;
    const lngRad = (spot.coords.lng * Math.PI) / 180;

    targetRotation.current = {
      x: latRad * 0.8,
      y: -lngRad - Math.PI / 2,
    };
  };

  // Dive to Darjeeling Animation
  const handleDiveToDarjeeling = () => {
    const darjeelingSpot = GLOBAL_MOUNTAIN_HOTSPOTS[0];
    centerOnHotspot(darjeelingSpot);
    setIsDiving(true);

    if (cameraRef.current) {
      const startZ = cameraRef.current.position.z;
      const targetZ = 14;
      const startTime = performance.now();
      const duration = 1200; // ms

      const step = (now) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2; // easeInOut
        cameraRef.current.position.z = startZ + (targetZ - startZ) * ease;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            setIsDiving(false);
            if (onDiveToDarjeeling) onDiveToDarjeeling();
          }, 300);
        }
      };
      requestAnimationFrame(step);
    } else {
      if (onDiveToDarjeeling) onDiveToDarjeeling();
    }
  };

  return (
    <div
      ref={mountRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden bg-[#030612]"
    >
      {/* 1. Top Global Telemetry Banner */}
      <div className="absolute top-24 left-6 right-6 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-4">
        {/* Left Telemetry Pills */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl border border-cyan-500/30 bg-slate-950/85 backdrop-blur-xl shadow-glass-card flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Global Mountain Population</div>
              <div className="text-base font-black text-white font-mono flex items-center gap-1.5">
                <span>{WORLD_WATER_METRICS.globalMountainPopulation}</span>
                <span className="text-[10px] text-cyan-400 font-normal">({WORLD_WATER_METRICS.globalSpringDependentFraction} spring-dependent)</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex px-4 py-2 rounded-2xl border border-emerald-500/30 bg-slate-950/85 backdrop-blur-xl shadow-glass-card items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">UN Water Benchmark</div>
              <div className="text-xs font-bold text-emerald-300">
                {WORLD_WATER_METRICS.unSdgTarget}
              </div>
            </div>
          </div>
        </div>

        {/* Right Active Pilot Badge */}
        <div className="globe-ui-interactive pointer-events-auto">
          <button
            onClick={handleDiveToDarjeeling}
            disabled={isDiving}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-black text-xs shadow-[0_0_25px_rgba(245,158,11,0.6)] flex items-center gap-2.5 transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-bounce" />
            <span>{isDiving ? 'Decending to Himalayas...' : '🚀 Dive to Darjeeling Pilot (100 Springs)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Left Floating Hotspot Telemetry Card */}
      {selectedHotspot && (
        <div
          onWheel={(e) => e.stopPropagation()}
          className="globe-ui-interactive absolute top-44 bottom-24 left-6 w-96 max-w-[calc(100vw-3rem)] z-30 rounded-3xl border border-white/20 bg-slate-950/92 p-5 shadow-2xl backdrop-blur-2xl text-white pointer-events-auto flex flex-col justify-between overflow-y-auto custom-scrollbar animate-slide-right"
        >
          <div>
            {/* Header Badge */}
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border font-mono ${
                      selectedHotspot.isFeatured
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                        : 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                    }`}
                  >
                    {selectedHotspot.pilotStatus}
                  </span>
                </div>
                <h3 className="text-lg font-black tracking-tight text-white leading-tight">
                  {selectedHotspot.name}
                </h3>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{selectedHotspot.region} • {selectedHotspot.country}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-3.5">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Elevation Range</div>
                <div className="text-sm font-mono font-extrabold text-white mt-0.5">
                  {selectedHotspot.elevation}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Annual Rainfall</div>
                <div className="text-sm font-mono font-extrabold text-cyan-300 mt-0.5">
                  {selectedHotspot.annualRainfall}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 col-span-2">
                <div className="text-[10px] uppercase font-bold text-slate-400">Aquifer Rock Geology</div>
                <div className="text-xs font-semibold text-emerald-300 mt-0.5">
                  {selectedHotspot.geology}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{selectedHotspot.aquiferType}</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 col-span-2">
                <div className="text-[10px] uppercase font-bold text-slate-400">Population Sustained</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {selectedHotspot.populationServed}
                </div>
              </div>
            </div>

            {/* Climate & Geological Threat */}
            <div className="p-3 rounded-2xl bg-red-950/30 border border-red-500/30 mb-3">
              <div className="text-[11px] font-bold text-red-300 flex items-center gap-1.5 mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span>Vulnerability & Threat Profile</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedHotspot.threatLevel}
              </p>
            </div>

            {/* Description & Analog Match */}
            <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2 mb-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedHotspot.description}
              </p>
              <div className="text-[11px] font-mono text-cyan-300 border-t border-white/10 pt-2 flex items-center gap-1">
                <span>🔄 Comparison:</span>
                <span className="font-semibold text-slate-200">{selectedHotspot.analogMatch}</span>
              </div>
            </div>

            {/* Recommended Interventions */}
            <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/20">
              <div className="text-[11px] font-bold text-cyan-300 mb-1.5">
                Recommended Hydrogeological Interventions:
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedHotspot.recommendedInterventions.map((intv, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{intv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-3 border-t border-white/15 mt-3">
            {selectedHotspot.isFeatured ? (
              <button
                onClick={handleDiveToDarjeeling}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-slate-950 font-black text-xs shadow-neon-cyan flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Fly to 3D Terrain (All 100 Springs)</span>
              </button>
            ) : (
              <button
                onClick={handleDiveToDarjeeling}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-white/15 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>Compare with Darjeeling Pilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. Bottom Quick-Jump Carousel & Controls */}
      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none flex flex-wrap items-center justify-between gap-3">
        {/* Left: Quick-Jump Hotspot Chips */}
        <div className="globe-ui-interactive pointer-events-auto flex items-center gap-2 overflow-x-auto max-w-full pb-1 custom-scrollbar">
          {GLOBAL_MOUNTAIN_HOTSPOTS.map((spot) => {
            const isSelected = selectedHotspot?.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => centerOnHotspot(spot)}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs shrink-0 transition flex items-center gap-1.5 border cursor-pointer ${
                  isSelected
                    ? spot.isFeatured
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-neon-cyan'
                    : 'bg-slate-950/85 text-slate-300 border-white/15 hover:border-white/35 hover:text-white'
                }`}
              >
                <span>{spot.isFeatured ? '⭐' : '🏔️'}</span>
                <span>{spot.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Globe Controls */}
        <div className="globe-ui-interactive pointer-events-auto flex items-center gap-2">
          {/* Play/Pause Rotation */}
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            className="p-2.5 rounded-xl bg-slate-950/85 border border-white/15 text-slate-300 hover:text-white transition cursor-pointer"
            title={isRotating ? 'Pause Rotation' : 'Resume Auto Rotation'}
          >
            {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Switch to Google Map */}
          <button
            onClick={onSwitchToGoogleMap}
            className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-cyan-300 hover:bg-slate-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Open Google Map</span>
          </button>

          {/* Switch to Big Map */}
          <button
            onClick={onSwitchToBigMap}
            className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/20 text-emerald-300 hover:bg-slate-800 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Open Big Map</span>
          </button>
        </div>
      </div>
    </div>
  );
}
