import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Bot,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  HelpCircle,
  Compass,
  ArrowRight,
  Droplets,
  Layers,
  RotateCcw
} from 'lucide-react';
import { api } from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

export default function AICopilotModal({
  isOpen,
  onClose,
  selectedSpring,
  onSelectSpring,
  onSwitchTo3D,
  onSwitchToBigMap,
}) {
  const { speakText, stopSpeaking, isSpeaking, language } = useLanguage();

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hello! I am your **Darjeeling Springs AI Hydrogeologist**, trained on the 15-cell machine learning pipeline from **SIH26240_Spring_Revival_Final.ipynb**.\n\nI can analyze any of the 100 springs, explain why 15 are Top Priority, assess Daling Schist vs Darjeeling Gneiss fracture systems, or simulate climate impacts. How can I assist your investigation today?`,
      time: 'Just now',
      suggestedActions: [
        'Analyze Devithan (SP-001)',
        'Why are 15 springs Top Priority?',
        'Explain the 6 Field Verification springs',
        'Recommend interventions for steep slopes',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg = {
      role: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await api.chatWithAI(query, { selectedSpring });
      if (response && response.answer) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: response.answer,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedActions: response.suggestedActions || [],
            targetSpringId: response.targetSpringId,
          },
        ]);
      } else {
        // Fallback local response
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: `Based on the SIH26240 Darjeeling dataset, the pilot region covers 100 surveyed springs over 111.0 km² of recharge area. Mean suitability is 58.2% and revival priority is 63.7%. For Devithan (SP-001), contour trenches and loose boulder check dams are recommended.`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            suggestedActions: ['Inspect Devithan in 3D', 'Open Big Map'],
          },
        ]);
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `I'm analyzing the 100 springs master dataset for: "${query}". You can also view spring details directly from the Big Map.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleActionClick = (actionText) => {
    if (actionText.includes('3D') && onSwitchTo3D) {
      onSwitchTo3D();
      onClose();
    } else if (actionText.includes('Big Map') && onSwitchToBigMap) {
      onSwitchToBigMap();
      onClose();
    } else {
      handleSend(actionText);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div
        className="relative w-full max-w-2xl h-[650px] max-h-[90vh] rounded-3xl border border-cyan-500/30 bg-slate-950 p-5 shadow-2xl backdrop-blur-2xl text-white flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-neon-cyan">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-white">
                  Darjeeling Springs AI Copilot
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-400/30">
                  SIH26240 Trained Model
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Trained on 15-cell PySheds, SRTM DEM, and IMD 2023 Rainfall Pipeline
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Active Spring Context Bar */}
        {selectedSpring && (
          <div className="my-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs flex items-center justify-between text-cyan-200">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                Active Spring: <strong>{selectedSpring.code}: {selectedSpring.name}</strong> ({selectedSpring.elevation_m}m, {selectedSpring.discharge_lpm} LPM)
              </span>
            </div>
            <button
              onClick={() => handleSend(`Analyze ${selectedSpring.code}: ${selectedSpring.name}`)}
              className="px-2 py-0.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-[10px] font-bold text-cyan-300"
            >
              Ask AI About This
            </button>
          </div>
        )}

        {/* Chat Message Scrollable Container */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 my-2 custom-scrollbar text-xs">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-900/90 border border-white/15 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="font-bold text-[11px] opacity-75 font-mono">
                    {msg.role === 'user' ? 'You' : '🤖 AI Hydrogeologist'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {msg.role === 'assistant' && (
                      <button
                        onClick={() => {
                          if (isSpeaking) stopSpeaking();
                          else speakText(msg.text.replace(/[*#]/g, ''));
                        }}
                        className="text-cyan-400 hover:text-cyan-300 p-0.5"
                        title={isSpeaking ? 'Stop Audio' : 'Listen to this response'}
                      >
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    )}
                    <span className="text-[10px] text-slate-400">{msg.time}</span>
                  </div>
                </div>

                <div className="mt-1 space-y-1">{msg.text}</div>

                {/* Suggested Action Chips */}
                {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                    {msg.suggestedActions.map((act, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(act)}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-300 text-[10px] font-semibold transition flex items-center gap-1"
                      >
                        <span>{act}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono p-3 bg-slate-900/60 rounded-2xl w-fit">
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Analyzing 100 springs hydrogeology & SHAP factors...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="pt-2 border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about springs, geology, interventions, or what-if scenarios..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-900 border border-white/20 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-neon-cyan disabled:opacity-40 transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
