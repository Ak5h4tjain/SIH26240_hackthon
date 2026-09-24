import React, { createContext, useContext, useState, useCallback } from 'react';

export const TRANSLATIONS = {
  en: {
    title: 'Darjeeling Springs Revival DSS',
    subtitle: '100 Springs Integrated • 88 Primary Zones • 6 Field Verifications',
    view3D: '3D Hill Terrain',
    viewBigMap: 'Big Map (100 Springs)',
    viewLearning: 'Water Learning Hub',
    viewGlobe: '3D World Globe',
    viewGoogleMap: 'Google Map',
    diveToDarjeeling: '🚀 Dive to Darjeeling Pilot',
    globalHotspots: 'Global Mountain Hotspots',
    pipelineAI: '5-Stage AI Pipeline',
    mobileSync: 'Mobile Sync',
    reportDhara: 'Report a Spring',
    
    // Personas
    personaCitizen: 'Elder / Citizen',
    personaStudent: 'Student / Youth',
    personaSpecialist: 'Hydrogeologist',

    // Stats
    springsRevived: 'Springs Revived',
    projectedRecharge: 'Projected Annual Recharge',
    meanSuitability: 'Mean Suitability',
    priority: 'Priority',
    funded: 'Funded',
    litersPerYear: 'L/yr',

    // Spring details
    springCode: 'Spring Code',
    elevation: 'Elevation',
    discharge: 'Current Discharge',
    flowStatus: 'Flow Condition',
    beneficiaries: 'Villages & Families Served',
    waterQuality: 'Drinking Water Safety',
    potable: 'Safe for Drinking',
    treatmentRequired: 'Requires Boiling / Filtration',
    interventions: 'Recommended Interventions',
    listenAudio: 'Listen to Spring Details',
    stopAudio: 'Stop Audio',
    flyToSpring: 'Fly to Spring',
    searchPlaceholder: 'Search 100 springs by name or number (e.g. Devithan, SP-015)...',

    // Filter labels
    all100: 'All 100 Springs',
    top15: 'Top 15 Priority',
    primary: 'Primary Zone (88)',
    fieldVerif: 'Field Verification (6)',
    highRisk: 'High Risk (20)',
    safeDrinking: 'Safe Drinking',
    criticalFlow: 'Critical (<5 LPM)',

    // Citizen Simplified labels
    citizenFlowGood: 'Water Flow: Strong & Healthy',
    citizenFlowMed: 'Water Flow: Moderate',
    citizenFlowLow: 'Water Flow: Low / Needs Protection',
    citizenHelpNotice: 'Reviving this spring provides daily clean water for your community.',

    // General
    zenMode: 'Zen Fullscreen',
    exitZen: 'Show Panels',
    overview: 'Full Overview',
    autoTour: 'Auto Tour',
    next: 'Next',
    prev: 'Prev',
  },

  ne: {
    title: 'दार्जिलिङ मूल पुनरुत्थान प्रणाली',
    subtitle: '१०० मूलहरू समावेश • ८८ प्राथमिक क्षेत्र • ६ स्थल प्रमाणीकरण',
    view3D: '३डी पहाडी नक्सा',
    viewBigMap: 'ठूलो नक्सा (१०० मूलहरू)',
    viewLearning: 'पानी सिकाइ केन्द्र',
    viewGlobe: '३डी विश्व ग्लोब',
    viewGoogleMap: 'गुगल नक्सा',
    diveToDarjeeling: '🚀 दार्जिलिङ परियोजनामा जानुहोस्',
    globalHotspots: 'विश्वका पर्वतीय मूल प्रणालीहरू',
    pipelineAI: '५-चरणीय एआई प्रणाली',
    mobileSync: 'मोबाइल सिङ्क',
    reportDhara: 'धाराको अवस्था रिपोर्ट गर्नुहोस्',

    personaCitizen: 'नागरिक / ज्येष्ठ नागरिक',
    personaStudent: 'विद्यार्थी / युवा',
    personaSpecialist: 'भूगर्भविद्',

    springsRevived: 'पुनर्जीवित धाराहरू',
    projectedRecharge: 'वार्षिक पानी पुनर्भरण',
    meanSuitability: 'औसत उपयुक्तता',
    priority: 'प्राथमिकता',
    funded: 'स्वीकृत',
    litersPerYear: 'लि/वर्ष',

    springCode: 'मूल कोड',
    elevation: 'उचाइ',
    discharge: 'हालको पानीको बहाव',
    flowStatus: 'बहावको अवस्था',
    beneficiaries: 'लाभान्वित परिवारहरू',
    waterQuality: 'पिउने पानीको गुणस्तर',
    potable: 'पिउन योग्य (सुरक्षित)',
    treatmentRequired: 'उमालेर वा छानेर पिउनुपर्ने',
    interventions: 'सिफारिस गरिएका कार्यहरू',
    listenAudio: 'धाराको विवरण सुन्नुहोस्',
    stopAudio: 'आवाज बन्द गर्नुहोस्',
    flyToSpring: 'धारामा जानुहोस्',
    searchPlaceholder: '१०० मूलहरू खोज्नुहोस् (जस्तै: देवीथान, SP-015)...',

    all100: 'सबै १०० मूलहरू',
    top15: 'शीर्ष १५ प्राथमिकता',
    primary: 'प्राथमिक क्षेत्र (८८)',
    fieldVerif: 'स्थल प्रमाणीकरण (६)',
    highRisk: 'उच्च जोखिम (२०)',
    safeDrinking: 'पिउन सुरक्षित',
    criticalFlow: 'कम बहाव (<५ LPM)',

    citizenFlowGood: 'पानीको बहाव: राम्रो र निरन्तर',
    citizenFlowMed: 'पानीको बहाव: मध्यम',
    citizenFlowLow: 'पानीको बहाव: कम / संरक्षण आवश्यक',
    citizenHelpNotice: 'यस धाराको संरक्षण गर्नाले गाउँमा वर्षैभरि स्वच्छ खानेपानी उपलब्ध हुनेछ।',

    zenMode: 'पूर्ण स्क्रिन दृश्य',
    exitZen: 'प्यानेलहरू देखाउनुहोस्',
    overview: 'सम्पूर्ण दार्जिलिङ',
    autoTour: 'स्वत: भ्रमण',
    next: 'अर्को',
    prev: 'अघिल्लो',
  },

  hi: {
    title: 'दार्जिलिंग जलधारा पुनरुद्धार प्रणाली',
    subtitle: '100 जलधाराएं एकीकृत • 88 प्राथमिक क्षेत्र • 6 स्थल सत्यापन',
    view3D: '3D पर्वतीय मानचित्र',
    viewBigMap: 'बड़ा मानचित्र (100 जलधाराएं)',
    viewLearning: 'जल शिक्षा केंद्र',
    viewGlobe: '3D विश्व ग्लोब',
    viewGoogleMap: 'गूगल मैप',
    diveToDarjeeling: '🚀 दार्जिलिंग पायलट में जाएं',
    globalHotspots: 'वैश्विक पर्वतीय जलस्रोत',
    pipelineAI: '5-चरणीय AI पाइपलाइन',
    mobileSync: 'मोबाइल सिंक',
    reportDhara: 'जलधारा की स्थिति बताएं',

    personaCitizen: 'नागरिक / वरिष्ठ जन',
    personaStudent: 'विद्यार्थी / युवा',
    personaSpecialist: 'भूवैज्ञानिक',

    springsRevived: 'पुनर्जीवित जलधाराएं',
    projectedRecharge: 'वार्षिक जल पुनर्भरण',
    meanSuitability: 'औसत उपयुक्तता',
    priority: 'प्राथमिकता',
    funded: 'वित्तपोषित',
    litersPerYear: 'लीटर/वर्ष',

    springCode: 'जलधारा कोड',
    elevation: 'ऊंचाई',
    discharge: 'वर्तमान जल बहाव',
    flowStatus: 'बहाव की स्थिति',
    beneficiaries: 'लाभान्वित परिवार',
    waterQuality: 'पेयजल गुणवत्ता',
    potable: 'पीने योग्य (सुरक्षित)',
    treatmentRequired: 'उबालकर पीना आवश्यक',
    interventions: 'सुझाए गए कार्य',
    listenAudio: 'विवरण सुनें',
    stopAudio: 'आवाज रोकें',
    flyToSpring: 'जलधारा पर जाएं',
    searchPlaceholder: '100 जलधाराएं खोजें (जैसे: देवीथान, SP-015)...',

    all100: 'सभी 100 जलधाराएं',
    top15: 'शीर्ष 15 प्राथमिकता',
    primary: 'प्राथमिक क्षेत्र (88)',
    fieldVerif: 'स्थल सत्यापन (6)',
    highRisk: 'उच्च जोखिम (20)',
    safeDrinking: 'सुरक्षित पेयजल',
    criticalFlow: 'गंभीर स्तर (<5 LPM)',

    citizenFlowGood: 'जल बहाव: बहुत अच्छा और प्रचुर',
    citizenFlowMed: 'जल बहाव: सामान्य',
    citizenFlowLow: 'जल बहाव: कम / संरक्षण की जरूरत',
    citizenHelpNotice: 'इस जलधारा को पुनर्जीवित करने से आपके पूरे क्षेत्र को स्वच्छ पानी मिलेगा।',

    zenMode: 'फुलस्क्रीन दृश्य',
    exitZen: 'पैनल दिखाएं',
    overview: 'संपूर्ण दृश्य',
    autoTour: 'ऑटो टूर',
    next: 'अगला',
    prev: 'पिछला',
  },

  bn: {
    title: 'দার্জিলিং প্রস্রবণ পুনরুজ্জীবন ব্যবস্থা',
    subtitle: '১০০টি ঝর্ণা অন্তর্ভুক্ত • ৮৮টি প্রাথমিক অঞ্চল • ৬টি মাঠ পরিদর্শন',
    view3D: '৩ডি পাহাড়ি মানচিত্র',
    viewBigMap: 'বড় মানচিত্র (১০০টি ঝর্ণা)',
    viewLearning: 'জল শিক্ষা কেন্দ্র',
    viewGlobe: '৩ডি বিশ্ব গ্লোব',
    viewGoogleMap: 'গুগল ম্যাপ',
    diveToDarjeeling: '🚀 দার্জিলিং প্রকল্পে প্রবেশ করুন',
    globalHotspots: 'বিশ্বব্যাপী পাহাড়ি প্রস্রবণ',
    pipelineAI: '৫-ধাপের এআই পাইপলাইন',
    mobileSync: 'মোবাইল সিঙ্ক',
    reportDhara: 'ঝর্ণার অবস্থা জানান',

    personaCitizen: 'নাগরিক / প্রবীণ',
    personaStudent: 'ছাত্র / তরুণ',
    personaSpecialist: 'ভূতত্ত্ববিদ',

    springsRevived: 'পুনরুজ্জীবিত ঝর্ণা',
    projectedRecharge: 'বার্ষিক জল পুনর্ভরণ',
    meanSuitability: 'গড় উপযুক্ততা',
    priority: 'অগ্রাধিকার',
    funded: 'অর্থায়িত',
    litersPerYear: 'লিটার/বছর',

    springCode: 'ঝর্ণা কোড',
    elevation: 'উচ্চতা',
    discharge: 'বর্তমান জলপ্রবাহ',
    flowStatus: 'প্রবাহের অবস্থা',
    beneficiaries: 'উপকৃত পরিবার',
    waterQuality: 'পানীয় জলের গুণমান',
    potable: 'পানযোগ্য (নিরাপদ)',
    treatmentRequired: 'ফুটিয়ে পান করা উচিত',
    interventions: 'প্রস্তাবিত পদক্ষেপ',
    listenAudio: 'বিবরণ শুনুন',
    stopAudio: 'শব্দ বন্ধ করুন',
    flyToSpring: 'ঝর্ণায় যান',
    searchPlaceholder: '১০০টি ঝর্ণা খুঁজুন (যেমন: দেবিথান, SP-015)...',

    all100: 'সব ১০০টি ঝর্ণা',
    top15: 'শীর্ষ ১৫ অগ্রাধিকার',
    primary: 'প্রাথমিক অঞ্চল (৮৮)',
    fieldVerif: 'মাঠ পরিদর্শন (৬)',
    highRisk: 'উচ্চ ঝুঁকি (২০)',
    safeDrinking: 'নিরাপদ পানীয় জল',
    criticalFlow: 'সংকটজনক (<৫ LPM)',

    citizenFlowGood: 'জলপ্রবাহ: স্বাভাবিক ও প্রচুর',
    citizenFlowMed: 'জলপ্রবাহ: মাঝারি',
    citizenFlowLow: 'জলপ্রবাহ: কম / সংরক্ষণ প্রয়োজন',
    citizenHelpNotice: 'এই ঝর্ণাটি সংরক্ষণ করলে আপনার গ্রামে সারা বছর সুপেয় জল মিলবে।',

    zenMode: 'পূর্ণ পর্দা দৃশ্য',
    exitZen: 'প্যানেল দেখান',
    overview: 'সম্পূর্ণ দার্জিলিং',
    autoTour: 'স্বয়ংক্রিয় ভ্রমণ',
    next: 'পরবর্তী',
    prev: 'পূর্ববর্তী',
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // 'en' | 'ne' | 'hi' | 'bn'
  const [persona, setPersona] = useState('citizen'); // 'citizen' | 'student' | 'specialist'
  const [fontScale, setFontScale] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [isSpeaking, setIsSpeaking] = useState(false);

  const t = useCallback(
    (key) => {
      return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
    },
    [language]
  );

  // Web Speech API Text-to-Speech narration
  const speakText = useCallback(
    (text) => {
      if (!('speechSynthesis' in window)) {
        console.warn('Voice narration is not supported on this browser environment.');
        return;
      }

      try {
        window.speechSynthesis.cancel(); // Stop any ongoing speech

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = persona === 'citizen' ? 0.88 : 0.98; // Slower, clearer speech for seniors
        utterance.pitch = 1.0;

        // Select matching regional voice if available
        const voices = window.speechSynthesis.getVoices() || [];
        const langCodeMap = {
          ne: 'ne-NP',
          hi: 'hi-IN',
          bn: 'bn-IN',
          en: 'en-IN'
        };
        const preferredCode = langCodeMap[language] || 'en-US';
        utterance.lang = preferredCode;

        const matchedVoice = voices.find(
          (v) => v.lang.startsWith(preferredCode.slice(0, 2)) || v.lang === preferredCode
        );
        if (matchedVoice) utterance.voice = matchedVoice;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('Speech synthesis error:', err);
        setIsSpeaking(false);
      }
    },
  );

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        persona,
        setPersona,
        fontScale,
        setFontScale,
        t,
        speakText,
        stopSpeaking,
        isSpeaking,
      }}
    >
      <div
        className={`w-full h-full ${
          fontScale === 'large' ? 'text-[1.08rem]' :
          fontScale === 'xlarge' ? 'text-[1.18rem]' : ''
        }`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
