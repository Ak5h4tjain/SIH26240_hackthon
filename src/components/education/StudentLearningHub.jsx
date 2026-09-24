import React, { useState } from 'react';
import {
  Droplets,
  Award,
  Sparkles,
  Layers,
  Compass,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  TreePine,
  Shield,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function StudentLearningHub({ onSwitchToMap, onSwitchTo3D }) {
  const { t, language } = useLanguage();

  // Water Hero Simulator State
  const [trenchesCount, setTrenchesCount] = useState(40);
  const [checkDamsCount, setCheckDamsCount] = useState(15);
  const [treesPlanted, setTreesPlanted] = useState(250);

  // Dynamic simulation calculations
  const waterRechargeLiters = Math.round(
    trenchesCount * 45000 + checkDamsCount * 120000 + treesPlanted * 1800
  );
  const familiesProvided = Math.round(waterRechargeLiters / 24000);
  const landslideRiskScore = Math.max(
    12,
    Math.round(85 - (trenchesCount * 0.4 + checkDamsCount * 0.8 + treesPlanted * 0.08))
  );

  // Quiz State
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const QUIZ_QUESTIONS = [
    {
      question:
        language === 'ne'
          ? 'दार्जिलिङमा वर्षा धेरै भए पनि हिउँदमा धारा किन सुक्छन्?'
          : language === 'hi'
          ? 'दार्जिलिंग में अत्यधिक वर्षा के बावजूद सर्दियों में जलधाराएं क्यों सूख जाती हैं?'
          : 'Why do Darjeeling springs dry up in winter despite receiving heavy monsoon rains?',
      options: [
        { text: 'Steep slopes cause 80% of rain to rapidly run off into rivers without infiltrating rock', correct: true },
        { text: 'Himalayan mountain clouds do not contain real water', correct: false },
        { text: 'Tea bushes absorb 100% of all subterranean aquifers', correct: false },
        { text: 'Springs only flow during full moon phases', correct: false },
      ],
      explanation:
        'Because Darjeeling slopes are between 25° and 45°, rainwater runs downhill into river canyons in just minutes unless recharge trenches trap and soak it into fractured rock.',
    },
    {
      question:
        language === 'ne'
          ? 'पहाडी जनजीवनमा "धारा" वा "खोला" को मुख्य स्रोत के हो?'
          : language === 'hi'
          ? 'पहाड़ी जनजीवन में "धारा" (Spring) का मुख्य प्राकृतिक स्रोत क्या है?'
          : 'What is the primary hydrogeological source of a mountain "Dhara" (Spring)?',
      options: [
        { text: 'Rainwater stored inside fractured schist and gneiss rock aquifers', correct: true },
        { text: 'Man-made concrete municipal pipelines from plains', correct: false },
        { text: 'Melted glacier ice from Mount Everest', correct: false },
        { text: 'Underground ocean geysers', correct: false },
      ],
      explanation:
        'In Darjeeling hills, springs originate from unconfined aquifers in fractured metamorphic Daling Schist and Darjeeling Gneiss rock formations.',
    },
    {
      question:
        language === 'ne'
          ? 'धाराको पानी बढाउन कुन संरचना सबैभन्दा प्रभावकारी हुन्छ?'
          : language === 'hi'
          ? 'जलधाराओं के पुनर्भरण के लिए कौन सी संरचना सबसे उपयुक्त है?'
          : 'Which conservation structure is most effective for trapping monsoon runoff on steep slopes?',
      options: [
        { text: 'Staggered Contour Trenches & Loose Boulder Check Dams', correct: true },
        { text: 'Paving the mountain slope with smooth concrete', correct: false },
        { text: 'Cutting down native oak and bamboo forests', correct: false },
        { text: 'Drilling deep vertical borewells on ridges', correct: false },
      ],
      explanation:
        'Staggered contour trenches break slope velocity, holding water so it can percolate into the mountain mantle.',
    },
    {
      question:
        language === 'ne'
          ? 'दार्जिलिङको उत्तरी ढलान कुन ठूलो नदीको जलाधारमा पर्छ?'
          : language === 'hi'
          ? 'दार्जिलिंग के उत्तरी ढलानों का जल किस प्रमुख नदी में जाता है?'
          : 'Which major river basin drains the northern slopes and springs of Darjeeling?',
      options: [
        { text: 'Great Rangeet River (confluence with Teesta)', correct: true },
        { text: 'Ganges River at Varanasi', correct: false },
        { text: 'Brahmaputra at Guwahati', correct: false },
        { text: 'Yamuna River', correct: false },
      ],
      explanation:
        'The Great Rangeet River forms the northern boundary, collecting runoff from northern Darjeeling tea valleys before merging with the Teesta at Triveni.',
    },
  ];

  const handleSelectOption = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (QUIZ_QUESTIONS[currentQuiz].options[idx].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuiz + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuiz((q) => q + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="w-full h-full pt-28 pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-y-auto custom-scrollbar text-white select-none">
      {/* 1. Header Banner */}
      <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/70 via-slate-950 to-blue-950/70 p-8 shadow-2xl backdrop-blur-xl mb-8 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
              🎒 Youth & Student Discovery Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              How Himalayan Springs Work & How We Revive Them
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Explore the secret underground journey of Darjeeling mountain water, simulate engineering recharge interventions, and test your knowledge as a certified Spring Revival Hero!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchToMap}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-neon-cyan transition flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explore 100 Springs Map</span>
            </button>
            <button
              onClick={onSwitchTo3D}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4" />
              <span>3D Mountain View</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Visual Step-by-Step Mountain Aquifer Journey */}
      <div className="mb-10">
        <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
          <Droplets className="w-5 h-5 text-cyan-400" />
          The 4 Stages of a Mountain Spring (Dhara)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: '01',
              title: 'Heavy Monsoon Rainfall',
              desc: 'Darjeeling receives ~2,500 mm of intense rainfall between June and September. Water drenches steep slopes.',
              icon: '🌧️',
              color: 'border-blue-500/30 bg-blue-950/20 text-blue-300',
            },
            {
              step: '02',
              title: 'Forest & Soil Infiltration',
              desc: 'Roots of oak, alder, and bamboo act as natural sponges, absorbing rain and slowing surface torrents.',
              icon: '🌲',
              color: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300',
            },
            {
              step: '03',
              title: 'Fractured Rock Aquifer',
              desc: 'Water trickles deep into natural fissures of Daling Schist and Gneiss, creating an unconfined groundwater reservoir.',
              icon: '🪨',
              color: 'border-purple-500/30 bg-purple-950/20 text-purple-300',
            },
            {
              step: '04',
              title: 'Village Spring (Dhara)',
              desc: 'Water emerges naturally on a hillside where the rock fracture meets the surface, providing clean drinking water.',
              icon: '💧',
              color: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300',
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`p-5 rounded-3xl border ${item.color} backdrop-blur-xl shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between text-2xl mb-3">
                  <span>{item.icon}</span>
                  <span className="font-mono text-xs font-bold opacity-60">STAGE {item.step}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Darjeeling Water Hero Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Left 2 Cols: Interactive Sliders */}
        <div className="lg:col-span-2 p-6 rounded-3xl border border-white/20 bg-slate-950/85 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400">INTERACTIVE LAB</span>
              <h3 className="text-xl font-black text-white">Water Hero Revival Simulator</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
              Live Physics Model
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Adjust the sliders below to see how community engineering interventions revive drying mountain springs, replenish groundwater, and protect hill communities!
          </p>

          <div className="space-y-5">
            {/* Slider 1: Contour Trenches */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-200">Staggered Contour Trenches (Traps Hill Runoff)</span>
                <span className="text-cyan-400 font-mono">{trenchesCount} units</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={trenchesCount}
                onChange={(e) => setTrenchesCount(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Slider 2: Check Dams */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-200">Loose Boulder Check Dams (Gully Plugging)</span>
                <span className="text-amber-400 font-mono">{checkDamsCount} units</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={checkDamsCount}
                onChange={(e) => setCheckDamsCount(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Slider 3: Tree Plantation */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-200">Native Mountain Trees Planted (Oak & Bamboo)</span>
                <span className="text-emerald-400 font-mono">{treesPlanted} saplings</span>
              </div>
              <input
                type="range"
                min="0"
                max="800"
                step="25"
                value={treesPlanted}
                onChange={(e) => setTreesPlanted(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Col: Dynamic Environmental Impact Telemetry */}
        <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">PROJECTED IMPACT</div>
            <h3 className="text-xl font-bold text-white mb-4">Revival Community Score</h3>

            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Annual Water Infiltration</div>
                <div className="text-2xl font-mono font-extrabold text-cyan-400 text-glow-cyan mt-0.5">
                  {(waterRechargeLiters / 100000).toFixed(2)} <span className="text-xs font-normal text-slate-300">Lakh Liters/yr</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Families Provided Clean Water</div>
                <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-0.5">
                  {familiesProvided} <span className="text-xs font-normal text-slate-300">Households</span>
                </div>
                <div className="text-[10px] text-emerald-300 mt-0.5">~{(familiesProvided * 4.8).toFixed(0)} villagers sustained</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400">Hill Slope Landslide Risk</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        landslideRiskScore > 50 ? 'bg-red-500' : landslideRiskScore > 30 ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                      style={{ width: `${landslideRiskScore}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs font-bold">{landslideRiskScore}%</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {landslideRiskScore < 30 ? 'Low Risk (Safe Roots & Slope)' : 'Moderate Slope Runoff'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300 font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Water Hero Badge: Champion of Darjeeling Springs!</span>
          </div>
        </div>
      </div>

      {/* 4. Himalayan Springs Quiz */}
      <div className="p-6 rounded-3xl border border-white/20 bg-slate-950/85 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Darjeeling Springs Quiz</h3>
              <p className="text-xs text-slate-400">Test your hydrogeological knowledge (Question {currentQuiz + 1} of {QUIZ_QUESTIONS.length})</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Score:</span>
            <span className="text-lg font-bold text-cyan-400">{score}</span>
            <span className="text-slate-500">/ {QUIZ_QUESTIONS.length}</span>
          </div>
        </div>

        {quizFinished ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Quiz Completed!</h4>
            <p className="text-sm text-slate-300">
              You scored <span className="text-cyan-400 font-bold">{score} out of {QUIZ_QUESTIONS.length}</span> correct! You now understand how to protect Darjeeling's mountain lifelines.
            </p>
            <button
              onClick={resetQuiz}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-neon-cyan inline-flex items-center gap-2 transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Quiz Again</span>
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {QUIZ_QUESTIONS[currentQuiz].question}
            </h4>

            <div className="space-y-2.5">
              {QUIZ_QUESTIONS[currentQuiz].options.map((opt, idx) => {
                const isChosen = selectedAnswer === idx;
                const showFeedback = selectedAnswer !== null;

                let btnClass = 'border-white/10 bg-slate-900/70 hover:border-white/30 text-slate-200';
                if (showFeedback) {
                  if (opt.correct) btnClass = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold ring-2 ring-emerald-400';
                  else if (isChosen) btnClass = 'border-red-500 bg-red-950/40 text-red-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={showFeedback}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition flex items-center justify-between ${btnClass}`}
                  >
                    <span>{opt.text}</span>
                    {showFeedback && opt.correct && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
                <p className="italic">{QUIZ_QUESTIONS[currentQuiz].explanation}</p>
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 self-end sm:self-auto flex items-center gap-1.5 transition"
                >
                  <span>{currentQuiz + 1 === QUIZ_QUESTIONS.length ? 'See Results' : 'Next Question'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
