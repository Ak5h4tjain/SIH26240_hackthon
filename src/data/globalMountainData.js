/**
 * Global Mountain Aquifers & Spring Networks Dataset
 * Positions Project SIH26240 Darjeeling Pilot in global context
 * Benchmarking international high-altitude spring ecosystems
 */

export const GLOBAL_MOUNTAIN_HOTSPOTS = [
  {
    id: 'himalayas-darjeeling',
    name: 'Darjeeling Himalayan Pilot (SIH26240)',
    region: 'Eastern Himalayas',
    country: 'India (West Bengal)',
    coords: { lat: 27.036, lng: 88.2627 },
    elevation: '1,100 m – 2,250 m',
    aquiferType: 'Fractured Hard-Rock Schist & Gneiss',
    geology: 'Daling Group (Chlorite-Sericite Schist/Phyllite) & Darjeeling Gneiss',
    monitoredSprings: '100 Surveyed Springs',
    primaryCatchment: '111.04 km² (Devithan Pilot Catchment)',
    populationServed: '185,000+ Mountain Inhabitants & 87 Tea Communities',
    annualRainfall: '2,520 mm – 3,200 mm (Monsoon Dominant)',
    threatLevel: 'Critical Seasonal Drought (Pre-Monsoon March–May)',
    pilotStatus: 'FEATURED ACTIVE PILOT (SIH26240 System)',
    isFeatured: true,
    description:
      'Primary field pilot area for the SIH26240 Decision Support System. Features 100 georeferenced mountain springs, 88 primary recharge zones, and site-specific contour trenching and check dams designed with PySheds flow routing.',
    analogMatch: '100% Native Ground Truth Benchmark',
    recommendedInterventions: [
      'Staggered contour trenching along 24° mountain slopes',
      'Loose boulder gully plugs in natural stream draws',
      'Native alder & bamboo vegetative filter strips'
    ]
  },
  {
    id: 'alps-matterhorn',
    name: 'Swiss Alps Karst Spring Network',
    region: 'European Alps',
    country: 'Switzerland & Northern Italy',
    coords: { lat: 45.9763, lng: 7.6586 },
    elevation: '1,600 m – 3,400 m',
    aquiferType: 'Karstified Carbonate & Crystalline Complex',
    geology: 'Penninic Nappes & Triassic Dolomitic Limestones',
    monitoredSprings: '420 Monitored Glacial Springs',
    primaryCatchment: '480 km² Alpine Watershed',
    populationServed: '1.4 Million Regional & Downstream Valleys',
    annualRainfall: '1,450 mm (Snowmelt & Convective Summer Rain)',
    threatLevel: 'High Glacial Retreat & Permafrost Degradation',
    pilotStatus: 'International UNESCO Benchmark',
    isFeatured: false,
    description:
      'European high-altitude karst spring observatory monitoring rapid glacial melt transitions and sub-surface fracture storage dynamics across the Valais Alps.',
    analogMatch: 'High elevation fracture storage analog to Darjeeling Gneiss',
    recommendedInterventions: [
      'Alpine wetland and peat bog conservation',
      'Artificial groundwater recharge via glacier runoff bypass',
      'Real-time automated acoustic flow meters'
    ]
  },
  {
    id: 'rockies-colorado',
    name: 'Rocky Mountain Alpine Aquifers',
    region: 'North American Cordillera',
    country: 'USA (Colorado / Wyoming)',
    coords: { lat: 39.5501, lng: -105.7821 },
    elevation: '2,400 m – 4,100 m',
    aquiferType: 'Fractured Crystalline Granitic Bedrock',
    geology: 'Precambrian Granite, Gneiss & Talus Slopes',
    monitoredSprings: '260 Headwater Springs',
    primaryCatchment: '620 km² Continental Divide Basin',
    populationServed: '2.8 Million Downstream Municipalities',
    annualRainfall: '850 mm – 1,200 mm (Snowpack Dependent)',
    threatLevel: 'Severe Multi-Year Megadrought & Wildfire Runoff',
    pilotStatus: 'Global Analog Network',
    isFeatured: false,
    description:
      'Continental divide headwater network providing perennial baseflow to the Colorado River. Highly dependent on high-elevation talus rock glaciers for seasonal aquifer buffering.',
    analogMatch: 'Granitic crystalline fracture permeability',
    recommendedInterventions: [
      'Beaver Dam Analog (BDA) headwater restoration',
      'High-altitude meadow soil moisture restoration',
      'Burn scar sediment debris filtration basins'
    ]
  },
  {
    id: 'andes-cusco',
    name: 'Andean Altiplano Bofedal Springs',
    region: 'Central Andes Mountains',
    country: 'Peru & Bolivia',
    coords: { lat: -13.5319, lng: -71.9675 },
    elevation: '3,200 m – 4,800 m',
    aquiferType: 'High-Altitude Wetland & Volcanic Tuff Aquifers',
    geology: 'Tertiary Volcanics & Paleozoic Sedimentary Slates',
    monitoredSprings: '310 Indigenous Puquio Springs',
    primaryCatchment: '340 km² Sacred Valley Catchment',
    populationServed: '650,000 Quechua Agricultural Communities',
    annualRainfall: '680 mm – 1,100 mm (Bimodal Wet Season)',
    threatLevel: 'Critical Glacier Extinction & Water Scarcity',
    pilotStatus: 'Global Indigenous Knowledge Partner',
    isFeatured: false,
    description:
      'High-altitude Andean peatland (Bofedales) and ancient Amuna stone water harvesting canals slowing glacial runoff and infiltrating water into fractured mountain slopes.',
    analogMatch: 'Indigenous mountain contour infiltration similar to Himalayan trenches',
    recommendedInterventions: [
      'Revival of ancestral Amuna contour infiltration canals',
      'Puna cushion plant wetland fencing and livestock rotation',
      'Stone and clay micro-percolation reservoirs'
    ]
  },
  {
    id: 'rift-valley-kenya',
    name: 'Mount Kenya Volcanic Spring System',
    region: 'East African Rift',
    country: 'Kenya & Tanzania',
    coords: { lat: -0.1521, lng: 37.3084 },
    elevation: '1,800 m – 3,200 m',
    aquiferType: 'Fractured Basaltic & Phonolitic Lavas',
    geology: 'Pliocene Alkali Basalts and Pyroclastic Tuffs',
    monitoredSprings: '180 Equatorial Mountain Springs',
    primaryCatchment: '290 km² Tana River Basin Headwaters',
    populationServed: '1.2 Million Tea & Coffee Smallholder Farmers',
    annualRainfall: '1,800 mm – 2,400 mm (Bimodal Monsoon)',
    threatLevel: 'High Deforestation & Intense Soil Erosion',
    pilotStatus: 'Global Analog Network',
    isFeatured: false,
    description:
      'Forested volcanic crater slopes sustaining downstream tea plantations and urban water supplies for Nairobi. Springs emerge from permeable lava interbeds capped by ash.',
    analogMatch: 'Steep tea estate slopes and high monsoon rainfall intensity',
    recommendedInterventions: [
      'Agroforestry shade-tree canopy restoration',
      'Vetiver grass contour soil stabilization hedges',
      'Community water user association metering kiosks'
    ]
  },
  {
    id: 'atlas-morocco',
    name: 'High Atlas Karst Oasis Springs',
    region: 'Atlas Mountain Range',
    country: 'Morocco',
    coords: { lat: 31.0601, lng: -7.9157 },
    elevation: '1,400 m – 2,900 m',
    aquiferType: 'Deep Folded Jurassic Limestone Karst',
    geology: 'Liassic Dolomites & Massive Marine Limestones',
    monitoredSprings: '145 Desert Border Springs (Aïn)',
    primaryCatchment: '210 km² Ourika & Todgha Watersheds',
    populationServed: '420,000 Berber Oasis Settlements',
    annualRainfall: '380 mm – 750 mm (Flash Storm Pulses)',
    threatLevel: 'Extreme Aridity & Over-Pumping in Foothills',
    pilotStatus: 'Global Analog Network',
    isFeatured: false,
    description:
      'Perennial lifeline springs draining the snow-capped High Atlas peaks down into hyper-arid pre-Saharan palm oases through deeply carved limestone gorges.',
    analogMatch: 'Fault-guided spring discharge mechanics',
    recommendedInterventions: [
      'Terraced stone retaining check dams across wadi channels',
      'Deep underground qanat / khettara horizontal galleries',
      'Solar-powered groundwater level telemetric monitoring'
    ]
  },
  {
    id: 'japanese-alps-nagano',
    name: 'Nagano Volcanic Mountain Springs',
    region: 'Chubu Japanese Alps',
    country: 'Japan',
    coords: { lat: 36.6513, lng: 138.1811 },
    elevation: '900 m – 2,800 m',
    aquiferType: 'Quaternary Andesitic & Rhyolitic Volcanics',
    geology: 'Volcanic Breccias, Ash Beds & Fractured Granites',
    monitoredSprings: '380 Pristine Mineral Springs (Meisui)',
    primaryCatchment: '310 km² Shinano River Headwaters',
    populationServed: '980,000 Residents & High-Tech Agriculture',
    annualRainfall: '1,950 mm (Heavy Winter Snow & Summer Typhoons)',
    threatLevel: 'Moderate (Seismic Activity & Aging Infrastructure)',
    pilotStatus: 'Technology Collaboration Benchmark',
    isFeatured: false,
    description:
      'World-famous mineral springs revered for ultra-pure drinking water and wasabi cultivation, protected by centuries of strict watershed forest preservation laws.',
    analogMatch: 'High topographic gradient and dense canopy filtration',
    recommendedInterventions: [
      'Satoyama forest sustainable thinning & understory management',
      'IoT seismic auto-shutoff valves on spring conduits',
      'Springhead sacred shrine bio-barrier buffer zoning'
    ]
  },
  {
    id: 'hindu-kush-hunza',
    name: 'Karakoram & Hunza Glacier-Fed Springs',
    region: 'Karakoram & Hindu Kush',
    country: 'Northern Pakistan & Ladakh, India',
    coords: { lat: 36.3167, lng: 74.65 },
    elevation: '2,200 m – 4,500 m',
    aquiferType: 'Glacio-Fluvial Moraine & Metamorphic Fractures',
    geology: 'Karakoram Metamorphic Complex (Schists & Marble)',
    monitoredSprings: '190 High-Altitude Melt Springs',
    primaryCatchment: '540 km² Hunza River Basin',
    populationServed: '320,000 High-Mountain Karakoram Inhabitants',
    annualRainfall: '220 mm – 650 mm (Glacier Melt Controlled)',
    threatLevel: 'Severe GLOF (Glacial Lake Outburst Flood) Risk',
    pilotStatus: 'Trans-Himalayan Partner Network',
    isFeatured: false,
    description:
      'Centuries-old gravity-fed water channels (Kuhls) redirecting cold glacier melt and moraine spring seeps across vertical rocky cliff faces to irrigate fertile terraced villages.',
    analogMatch: 'Direct metamorphic schist & phyllite lithological twin to Darjeeling',
    recommendedInterventions: [
      'Artificial ice stupa and glacier grafting storage structures',
      'Reinforced stone and geotextile slope conduits',
      'Satellite radar early warning for moraine dam breaches'
    ]
  },
  {
    id: 'caucasus-georgia',
    name: 'Greater Caucasus Mineral Springs',
    region: 'Caucasus Mountain Belt',
    country: 'Georgia & Armenia',
    coords: { lat: 42.1578, lng: 44.5021 },
    elevation: '1,200 m – 3,100 m',
    aquiferType: 'Deep Thermomineral Carbonate Fractures',
    geology: 'Jurassic Flysch, Shales & Neogene Volcanics',
    monitoredSprings: '215 Naturally Carbonated Springs',
    primaryCatchment: '370 km² Mtkvari River Basin',
    populationServed: '850,000 Mountain & Downstream Towns',
    annualRainfall: '1,200 mm – 1,800 mm (Continental Alpine)',
    threatLevel: 'Moderate Landslide Siltation & Industrial Bottling Stress',
    pilotStatus: 'Global Analog Network',
    isFeatured: false,
    description:
      'High mineral content natural effervescent springs driven by deep geothermal CO2 degassing along major thrust faults in the Greater Caucasus range.',
    analogMatch: 'Deep thrust fault spring localization mechanics',
    recommendedInterventions: [
      'Springhead catchment sanitary protection perimeter rings',
      'Continuous dissolved radon and conductivity telemetry',
      'Sub-surface drainage gallery rehabilitation'
    ]
  },
  {
    id: 'australia-snowy',
    name: 'Snowy Mountains Alpine Sphagnum Bogs',
    region: 'Great Dividing Range',
    country: 'Australia (NSW / Victoria)',
    coords: { lat: -36.4559, lng: 148.2635 },
    elevation: '1,400 m – 2,228 m',
    aquiferType: 'Sub-Alpine Sphagnum Peatland & Granitic Regolith',
    geology: 'Paleozoic Granites, Metasediments & Basalt Caps',
    monitoredSprings: '165 Alpine Bog Springs',
    primaryCatchment: '410 km² Snowy Hydro Headwaters',
    populationServed: '3.5 Million Downstream Murray-Darling Agricultural Basin',
    annualRainfall: '1,600 mm – 2,200 mm (Winter Snow & Cold Fronts)',
    threatLevel: 'Severe Bushfire Damage & Feral Horse Hard-Hoof Trampling',
    pilotStatus: 'Global Analog Network',
    isFeatured: false,
    description:
      'High-altitude sponge moss wetlands and regolith springs that slowly release winter moisture throughout the dry Australian summer to feed the vital Murray-Darling river network.',
    analogMatch: 'Peatland sponge retention physics analogous to bamboo vegetative strips',
    recommendedInterventions: [
      'Coir-log wetland re-wetting and erosion gully blocking',
      'Alpine sensitive habitat exclusion fencing',
      'Post-bushfire sediment traps and native sedge replanting'
    ]
  }
];

export const WORLD_WATER_METRICS = {
  globalMountainPopulation: '2.14 Billion',
  globalSpringDependentFraction: '68.4%',
  unSdgTarget: 'SDG 6.6 (Protect & Restore Water Ecosystems)',
  monitoredHotspotsCount: 10,
  darjeelingCatchmentAreaKm2: '111.04 km²',
  darjeelingSpringsMonitored: 100,
  darjeelingRevivalPriorityCount: 15,
};
