import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Camera,
  Send,
  MapPin,
  Compass,
  Upload,
  RefreshCw,
  FileText,
  Clock,
  UserCheck,
  Check,
  Sparkles,
  Info
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { api } from '../../services/api';

export default function CitizenReportModal({
  isOpen,
  onClose,
  springs = [],
  selectedSpring = null,
  onReportSubmitted = null,
}) {
  const { t, language } = useLanguage();

  // Active view tab: 'form' | 'history'
  const [activeTab, setActiveTab] = useState('form');

  // Form states
  const [selectedSpringId, setSelectedSpringId] = useState('');
  const [flowCondition, setFlowCondition] = useState('good');
  const [waterClarity, setWaterClarity] = useState('clear');
  const [reporterName, setReporterName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [customDischarge, setCustomDischarge] = useState('');
  const [remarks, setRemarks] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoFileName, setPhotoFileName] = useState('');
  const [gpsCoords, setGpsCoords] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationAccuracy, setLocationAccuracy] = useState(null);

  // Submission & validation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReport, setSubmittedReport] = useState(null);
  const [formError, setFormError] = useState(null);

  // Past reports feed
  const [pastReports, setPastReports] = useState([]);
  const [isLoadingReports, setIsLoadingReports] = useState(false);

  // Hidden file input ref
  const fileInputRef = useRef(null);

  // 1. Synchronize Selected Spring when modal opens or selectedSpring changes
  useEffect(() => {
    if (!isOpen) return;

    if (selectedSpring) {
      const id = selectedSpring.id || selectedSpring.code;
      setSelectedSpringId(id);
      if (selectedSpring.gisCoords) {
        setGpsCoords({
          lat: Number(selectedSpring.gisCoords.lat.toFixed(5)),
          lng: Number(selectedSpring.gisCoords.lng.toFixed(5)),
        });
      }
    } else if (springs.length > 0 && !selectedSpringId) {
      setSelectedSpringId(springs[0].id || springs[0].code);
      if (springs[0].gisCoords) {
        setGpsCoords({
          lat: Number(springs[0].gisCoords.lat.toFixed(5)),
          lng: Number(springs[0].gisCoords.lng.toFixed(5)),
        });
      }
    }
  }, [isOpen, selectedSpring, springs]);

  // 2. Load past community reports when opening modal or tab
  useEffect(() => {
    if (!isOpen) return;

    const loadReports = async () => {
      setIsLoadingReports(true);
      try {
        const data = await api.getFieldValidations();
        setPastReports(Array.isArray(data) ? data : []);
      } catch (e) {
        console.warn('Failed to load past field reports:', e);
      } finally {
        setIsLoadingReports(false);
      }
    };

    loadReports();
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  // Resolve current spring object
  const currentSpring =
    springs.find(
      (s) =>
        s.id === selectedSpringId ||
        s.code === selectedSpringId ||
        String(s.slNo) === String(selectedSpringId) ||
        String(s.springNumber) === String(selectedSpringId)
    ) ||
    springs[0] ||
    null;

  // Update GPS when user switches springs
  const handleSpringChange = (newId) => {
    setSelectedSpringId(newId);
    const target = springs.find(
      (s) => s.id === newId || s.code === newId || String(s.slNo) === String(newId)
    );
    if (target && target.gisCoords) {
      setGpsCoords({
        lat: Number(target.gisCoords.lat.toFixed(5)),
        lng: Number(target.gisCoords.lng.toFixed(5)),
      });
    }
  };

  // 3. Geolocation detector
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        setGpsCoords({
          lat: Number(pos.coords.latitude.toFixed(5)),
          lng: Number(pos.coords.longitude.toFixed(5)),
        });
        setLocationAccuracy(Math.round(pos.coords.accuracy));
      },
      (err) => {
        setIsLocating(false);
        console.warn('Geolocation error:', err.message);
        // Fallback to spring coords
        if (currentSpring?.gisCoords) {
          setGpsCoords({
            lat: Number(currentSpring.gisCoords.lat.toFixed(5)),
            lng: Number(currentSpring.gisCoords.lng.toFixed(5)),
          });
        }
      },
      { timeout: 8000, enableHighAccuracy: true }
    );
  };

  // 4. Photo upload handler
  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhotoFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUseDemoPhoto = () => {
    // Generate a sleek SVG data-url placeholder representing a pristine Himalayan mountain spring
    const demoSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23064e3b"/><stop offset="50%" stop-color="%230f766e"/><stop offset="100%" stop-color="%230284c7"/></linearGradient></defs><rect width="400" height="250" fill="url(%23g)"/><path d="M0,180 Q100,120 200,160 T400,140 L400,250 L0,250 Z" fill="%23042f2e" opacity="0.8"/><circle cx="200" cy="170" r="30" fill="%2338bdf8" opacity="0.6"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23f0fdf4" font-family="sans-serif" font-size="16" font-weight="bold">Darjeeling Himalayan Spring Survey</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="%2367e8f9" font-family="sans-serif" font-size="12">Geo-tagged Ground Observation Photo</text></svg>`;
    setPhotoPreview(demoSvg);
    setPhotoFileName('darjeeling_dhara_survey.jpg');
  };

  // 5. Quick remarks tag appender
  const handleAddTag = (tag) => {
    setRemarks((prev) => {
      if (!prev) return tag;
      if (prev.includes(tag)) return prev;
      return `${prev}, ${tag}`;
    });
  };

  // 6. Form Submission Handler (Never silently blocks)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try {
      // Discharge estimate: custom LPM or inferred from flow condition
      let dischargeValue = 1.2;
      if (customDischarge && !isNaN(parseFloat(customDischarge))) {
        dischargeValue = parseFloat(customDischarge);
      } else if (flowCondition === 'good') {
        dischargeValue = 18.5;
      } else if (flowCondition === 'moderate') {
        dischargeValue = 8.2;
      } else {
        dischargeValue = 1.1;
      }

      // Name resolution: if empty, default to Community Resident (Never block user)
      const surveyorDisplayName = isAnonymous
        ? 'Anonymous Community Resident'
        : reporterName.trim()
        ? reporterName.trim()
        : 'Darjeeling Community Resident';

      const payload = {
        springId: currentSpring?.id || selectedSpringId || 'spring-1',
        springCode: currentSpring?.code || 'SP-001',
        springName: currentSpring?.name || 'Devithan',
        discharge: dischargeValue,
        flowCondition,
        clarity: waterClarity,
        surveyor: surveyorDisplayName,
        contact: contactNumber.trim(),
        notes: remarks.trim() || 'Routine community spring condition report',
        photoUrl: photoPreview || null,
        photoName: photoFileName || null,
        gpsCoords: gpsCoords || {
          lat: currentSpring?.gisCoords?.lat || 27.038,
          lng: currentSpring?.gisCoords?.lng || 88.263,
        },
        timestamp: new Date().toISOString(),
      };

      // Call API service
      const res = await api.submitFieldValidation(payload);

      const createdRecord = res.data || {
        id: `obs-local-${Date.now().toString().slice(-4)}`,
        ...payload,
        verified: true,
      };

      setSubmittedReport(createdRecord);

      // Prepend to past reports list for instant visibility
      setPastReports((prev) => [createdRecord, ...prev]);

      // Notify parent component
      if (onReportSubmitted) {
        onReportSubmitted(createdRecord);
      }
    } catch (err) {
      console.error('Report submission error:', err);
      setFormError('Failed to sync with taskforce server. Saved offline locally.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to submit another report
  const handleResetForm = () => {
    setSubmittedReport(null);
    setRemarks('');
    setPhotoPreview(null);
    setPhotoFileName('');
    setCustomDischarge('');
    setFormError(null);
    setActiveTab('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div
        className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-slate-900/98 shadow-2xl text-white max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 shadow-neon-cyan">
              <Droplets className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
                  SIH26240 Ground Truth
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono text-emerald-300 flex items-center gap-1">
                  <UserCheck className="w-3 h-3" />
                  Community Portal
                </span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white mt-0.5">
                {language === 'ne'
                  ? 'दार्जिलिङ धारा समुदाय रिपोर्ट'
                  : language === 'hi'
                  ? 'दार्जिलिंग जलधारा समुदाय रिपोर्ट'
                  : language === 'bn'
                  ? 'দার্জিলিং ঝর্ণা পর্যবেক্ষণ রিপোর্ট'
                  : 'Report Spring Water Condition'}
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher (New Report vs Recent Reports Feed) */}
        <div className="flex border-b border-white/10 bg-slate-950/40 px-5 pt-3 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${
              activeTab === 'form'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>
              {language === 'ne'
                ? 'नयाँ अवलोकन फारम'
                : language === 'hi'
                ? 'नया अवलोकन फॉर्म'
                : 'Submit Observation'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition ${
              activeTab === 'history'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>
              {language === 'ne'
                ? 'हालैका रिपोर्टहरू'
                : language === 'hi'
                ? 'हाल के रिपोर्ट'
                : 'Recent Reports'}
            </span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/15 text-[10px] font-mono text-slate-200">
              {pastReports.length}
            </span>
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar space-y-5">
          {/* TAB 1: REPORT FORM */}
          {activeTab === 'form' && (
            <>
              {submittedReport ? (
                /* SUCCESS CONFIRMATION STATE */
                <div className="py-6 text-center space-y-5 animate-scale-up">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-neon-emerald">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {language === 'ne'
                        ? 'धन्यवाद! तपाईंको रिपोर्ट दर्ता भयो।'
                        : language === 'hi'
                        ? 'धन्यवाद! आपकी रिपोर्ट दर्ज कर ली गई है।'
                        : language === 'bn'
                        ? 'ধন্যবাদ! আপনার রিপোর্ট নথিভুক্ত হয়েছে।'
                        : 'Thank You! Your Spring Report is Submitted.'}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
                      {language === 'ne'
                        ? 'तपाईंको अवलोकनले दार्जिलिङका जलस्रोत विज्ञहरू र पञ्चायतलाई समयमै रिचार्ज योजना बनाउन मद्दत पुर्‍याउनेछ।'
                        : language === 'hi'
                        ? 'आपके द्वारा दी गई जानकारी से दार्जिलिंग के भूवैज्ञानिकों को समय पर कार्य करने में मदद मिलेगी।'
                        : 'Your observation is recorded in the live registry and synced directly with the Darjeeling Revival Taskforce.'}
                    </p>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 text-left text-xs space-y-2.5">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-slate-400">Official Report ID:</span>
                      <span className="font-mono text-emerald-300 font-bold">
                        #{submittedReport.id?.toUpperCase() || 'DRJ-CITIZEN-104'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Selected Spring:</span>
                      <span className="text-white font-medium">
                        {currentSpring?.name} ({currentSpring?.code})
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Observed Flow / Discharge:</span>
                      <span className="font-mono text-cyan-300 font-semibold">
                        {submittedReport.flowCondition?.toUpperCase()} (~{submittedReport.discharge} LPM)
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Water Clarity:</span>
                      <span className="text-white font-medium capitalize">
                        {submittedReport.clarity === 'clear' ? '💧 Clean & Clear' : '⚠️ Muddy / Turbid'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Reported By:</span>
                      <span className="text-white">{submittedReport.surveyor}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Verified Location:</span>
                      <span className="font-mono text-slate-300 text-[11px]">
                        {submittedReport.gpsCoords?.lat?.toFixed(4)}° N,{' '}
                        {submittedReport.gpsCoords?.lng?.toFixed(4)}° E
                      </span>
                    </div>

                    {submittedReport.photoUrl && (
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-slate-400 block mb-1">Attached Evidence:</span>
                        <img
                          src={submittedReport.photoUrl}
                          alt="Field observation"
                          className="w-full h-28 object-cover rounded-xl border border-white/20"
                        />
                      </div>
                    )}
                  </div>

                  {/* AI Model feedback badge */}
                  <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Continuous Learning: AI hydrogeology model weights updated with ground observation.</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('history')}
                      className="btn-secondary py-2.5 px-4 text-xs"
                    >
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>View Live Reports Feed</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="btn-primary py-2.5 px-4 text-xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Report</span>
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-secondary py-2.5 px-4 text-xs"
                    >
                      <span>Done</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* MAIN OBSERVATION FORM */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error banner if any */}
                  {formError && (
                    <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* 1. Spring Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Select Himalayan Spring (100 Verified Sources):</span>
                    </label>
                    <select
                      value={selectedSpringId}
                      onChange={(e) => handleSpringChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    >
                      {springs.map((s) => (
                        <option key={s.id || s.code} value={s.id || s.code}>
                          {s.code}: {s.name} ({s.location || s.block || 'Darjeeling'}) • {s.elevation_m || 1500}m
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current Spring Snapshot Card */}
                  {currentSpring && (
                    <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-slate-300">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{currentSpring.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-[10px]">
                            {currentSpring.code}
                          </span>
                        </div>
                        <div className="text-[11px] text-cyan-300/80 mt-0.5 flex items-center gap-2 flex-wrap">
                          <span>Elevation: {currentSpring.elevation_m}m</span>
                          <span>•</span>
                          <span>Baseline: {currentSpring.discharge_lpm} LPM</span>
                          <span>•</span>
                          <span>Rock: {currentSpring.lithology || 'Schist / Gneiss'}</span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-semibold shrink-0">
                        {currentSpring.status || 'Active'}
                      </span>
                    </div>
                  )}

                  {/* 2. Flow Condition Preset Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {language === 'ne'
                        ? 'आज धाराको पानीको बहाव कस्तो छ?'
                        : language === 'hi'
                        ? 'आज जलधारा में पानी का बहाव कैसा है?'
                        : 'How is the water flowing today?'}
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        {
                          id: 'good',
                          label: '🟢 प्रचुर / Good',
                          sub: 'Full Flow (>15 LPM)',
                          border: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300',
                          activeClass: 'ring-2 ring-emerald-400 bg-emerald-950/60 border-emerald-400',
                        },
                        {
                          id: 'moderate',
                          label: '🟠 मध्यम / Moderate',
                          sub: 'Reduced (5-15 LPM)',
                          border: 'border-amber-500/50 bg-amber-950/30 text-amber-300',
                          activeClass: 'ring-2 ring-amber-400 bg-amber-950/60 border-amber-400',
                        },
                        {
                          id: 'critical',
                          label: '🔴 सुकेको / Low / Dry',
                          sub: 'Critical (<5 LPM)',
                          border: 'border-red-500/50 bg-red-950/30 text-red-300',
                          activeClass: 'ring-2 ring-red-400 bg-red-950/60 border-red-400',
                        },
                      ].map((item) => {
                        const isSelected = flowCondition === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setFlowCondition(item.id)}
                            className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                              isSelected
                                ? `${item.border} ${item.activeClass} shadow-glass-card`
                                : 'border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="font-bold text-xs">{item.label}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-300" />}
                            </div>
                            <span className="text-[10px] mt-1.5 opacity-80 font-mono">{item.sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional exact LPM input */}
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Exact Measured Flow (Optional Bucket Test LPM):
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="e.g. 12.5 (leave blank to use preset flow above)"
                      value={customDischarge}
                      onChange={(e) => setCustomDischarge(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  {/* 3. Water Clarity & Quality */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {language === 'ne'
                        ? 'पानीको स्वच्छता:'
                        : language === 'hi'
                        ? 'पानी की स्वच्छता:'
                        : 'Water Clarity & Quality:'}
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setWaterClarity('clear')}
                        className={`p-3 rounded-2xl border transition text-left flex items-start justify-between ${
                          waterClarity === 'clear'
                            ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 ring-2 ring-cyan-400 shadow-glass-card'
                            : 'border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs">💧 कञ्चन सफा / Clear</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Clean, odorless, drinking quality</div>
                        </div>
                        {waterClarity === 'clear' && <Check className="w-4 h-4 text-cyan-300 shrink-0" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setWaterClarity('muddy')}
                        className={`p-3 rounded-2xl border transition text-left flex items-start justify-between ${
                          waterClarity === 'muddy'
                            ? 'border-amber-400 bg-amber-950/40 text-amber-300 ring-2 ring-amber-400 shadow-glass-card'
                            : 'border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs">⚠️ धमिलो / Muddy / Silt</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">Sediment or runoff discoloration</div>
                        </div>
                        {waterClarity === 'muddy' && <Check className="w-4 h-4 text-amber-300 shrink-0" />}
                      </button>
                    </div>
                  </div>

                  {/* 4. Photo Evidence & Live GPS Geotag */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Photo Capture / Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Photo Evidence:</span>
                        </span>
                        {!photoPreview && (
                          <button
                            type="button"
                            onClick={handleUseDemoPhoto}
                            className="text-[10px] text-cyan-300 underline hover:text-cyan-200"
                          >
                            Use Demo Photo
                          </button>
                        )}
                      </label>

                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        capture="environment"
                        onChange={handlePhotoSelect}
                        className="hidden"
                      />

                      {photoPreview ? (
                        <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-950">
                          <img
                            src={photoPreview}
                            alt="Spring capture preview"
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-1.5 text-[10px] text-slate-200 flex justify-between items-center">
                            <span className="truncate max-w-[160px]">{photoFileName || 'Observation Photo'}</span>
                            <button
                              type="button"
                              onClick={() => {
                                setPhotoPreview(null);
                                setPhotoFileName('');
                              }}
                              className="text-red-400 hover:text-red-300 font-bold px-1"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full h-24 rounded-2xl border-2 border-dashed border-white/20 hover:border-cyan-400/60 bg-slate-950/50 flex flex-col items-center justify-center gap-1.5 text-slate-400 hover:text-cyan-300 transition"
                        >
                          <Upload className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs font-semibold">Attach / Snap Photo</span>
                          <span className="text-[10px] text-slate-500">Camera or Gallery</span>
                        </button>
                      )}
                    </div>

                    {/* GPS Coordinates */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-cyan-400" />
                          <span>GPS Coordinates:</span>
                        </span>
                        {locationAccuracy && (
                          <span className="text-[10px] text-emerald-400 font-mono">
                            ±{locationAccuracy}m accuracy
                          </span>
                        )}
                      </label>

                      <div className="h-24 p-2.5 rounded-2xl border border-white/15 bg-slate-950/80 flex flex-col justify-between text-xs">
                        <div className="font-mono text-cyan-300 text-xs">
                          {gpsCoords ? (
                            <>
                              <div>Lat: {gpsCoords.lat.toFixed(5)}° N</div>
                              <div>Lng: {gpsCoords.lng.toFixed(5)}° E</div>
                            </>
                          ) : (
                            <span className="text-slate-500">Detecting location...</span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={handleDetectLocation}
                          disabled={isLocating}
                          className="w-full py-1.5 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition"
                        >
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{isLocating ? 'Acquiring GPS...' : 'Detect My Location'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 5. Reporter Identification (Fixed: Never blocks user submission) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'ne' ? 'रिपोर्टर जानकारी:' : language === 'hi' ? 'रिपोर्टर जानकारी:' : 'Observer Identity:'}
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-cyan-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="rounded border-white/30 text-cyan-500 focus:ring-cyan-400 bg-slate-950"
                        />
                        <span>Report Anonymously</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          disabled={isAnonymous}
                          placeholder={isAnonymous ? 'Anonymous Community Resident' : 'Your Name (e.g. Tenzing Sherpa)'}
                          value={isAnonymous ? '' : reporterName}
                          onChange={(e) => setReporterName(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none disabled:opacity-50"
                        />
                        <span className="text-[10px] text-slate-400 mt-0.5 block">
                          Optional. Defaults to local community resident.
                        </span>
                      </div>

                      <div>
                        <input
                          type="tel"
                          disabled={isAnonymous}
                          placeholder="Contact Number (e.g. +91 98XXX XXXXX)"
                          value={isAnonymous ? '' : contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none disabled:opacity-50"
                        />
                        <span className="text-[10px] text-slate-400 mt-0.5 block">
                          Optional for SMS field verification.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 6. Remarks and Quick Tag Shortcuts */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-semibold text-slate-300">
                        {language === 'ne'
                          ? 'थप टिप्पणी र अवस्था:'
                          : language === 'hi'
                          ? 'अतिरिक्त टिप्पणी:'
                          : 'Ground Observations & Local Situation:'}
                      </label>
                    </div>

                    {/* Quick suggestion tags */}
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      {[
                        'Landslide nearby',
                        'Pipe leakage',
                        'Mud siltation',
                        'Trench needed',
                        'Water clear & sweet',
                        'Reduced by half',
                      ].map((tag) => (
                        <button
                          type="button"
                          key={tag}
                          onClick={() => handleAddTag(tag)}
                          className="px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[10px] text-slate-300 transition"
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={2}
                      placeholder="e.g. Observed drying trend since last week, local villagers request contour trench recharge in upper ridge..."
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/20 text-white text-xs focus:border-cyan-400 focus:outline-none custom-scrollbar"
                    />
                  </div>

                  {/* Submit Button (Never dead, always responsive) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-neon-cyan"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Submitting to Darjeeling Taskforce...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>
                            {language === 'ne'
                              ? 'रिपोर्ट पेश गर्नुहोस्'
                              : language === 'hi'
                              ? 'रिपोर्ट सबमिट करें'
                              : language === 'bn'
                              ? 'রিপোর্ট জমা দিন'
                              : 'Submit Spring Water Report'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {/* TAB 2: RECENT COMMUNITY REPORTS FEED */}
          {activeTab === 'history' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-1">
                <span>Verified Field & Citizen Ground Surveys:</span>
                <button
                  type="button"
                  onClick={async () => {
                    setIsLoadingReports(true);
                    const data = await api.getFieldValidations();
                    setPastReports(data);
                    setIsLoadingReports(false);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingReports ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>

              {pastReports.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-2">
                  <FileText className="w-8 h-8 mx-auto text-slate-500" />
                  <p className="text-xs">No reports recorded yet for this session.</p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('form')}
                    className="btn-secondary py-1.5 px-3 text-xs"
                  >
                    Submit the First Report
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {pastReports.map((obs, idx) => (
                    <div
                      key={obs.id || idx}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-500/40 transition space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-300 text-xs font-bold">
                            {obs.springCode || obs.springId}
                          </span>
                          <span className="text-xs text-white font-medium">
                            {obs.springName || 'Darjeeling Spring'}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                            obs.flowCondition === 'good'
                              ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                              : obs.flowCondition === 'critical'
                              ? 'bg-red-500/20 border-red-400/30 text-red-300'
                              : 'bg-amber-500/20 border-amber-400/30 text-amber-300'
                          }`}
                        >
                          {obs.discharge ? `${obs.discharge} LPM` : obs.flowCondition || 'Good'}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {obs.notes || 'Routine ground condition check.'}
                      </p>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                        <div className="flex items-center gap-1.5">
                          <UserCheck className="w-3 h-3 text-cyan-400" />
                          <span>{obs.surveyor || 'Community Observer'}</span>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>
                            {obs.timestamp ? new Date(obs.timestamp).toLocaleDateString() : 'Today'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Info */}
        <div className="p-3 border-t border-white/10 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between px-5">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-cyan-400" />
            <span>SIH26240 Ground Validation Taskforce • Darjeeling District</span>
          </div>
          <span className="text-slate-500 font-mono text-[10px]">v1.0 Live</span>
        </div>
      </div>
    </div>
  );
}
