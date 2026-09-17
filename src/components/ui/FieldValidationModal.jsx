import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Smartphone,
  MapPin,
  Camera,
  CheckCircle2,
  RefreshCw,
  Droplets,
  Send,
  UploadCloud,
  FileCheck
} from 'lucide-react';
import { api } from '../../services/api';

export default function FieldValidationModal({ isOpen, onClose, selectedSpring }) {
  const [dischargeInput, setDischargeInput] = useState('3.8');
  const [observationNotes, setObservationNotes] = useState('Contour trenches completed upstream. Noticeable water retention in karst fractures.');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [retrainMeta, setRetrainMeta] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      springId: selectedSpring.id,
      discharge: parseFloat(dischargeInput),
      surveyor: 'Field Surveyor Amit Rawat',
      notes: observationNotes,
      gpsCoords: selectedSpring.coords ? { lat: selectedSpring.coords.lat || 29.5828, lng: selectedSpring.coords.lng || 79.6436 } : { lat: 29.5828, lng: 79.6436 },
    };

    const response = await api.submitFieldValidation(payload);
    setIsSubmitting(false);
    setIsSuccess(true);
    if (response?.continuousLearning) {
      setRetrainMeta(response.continuousLearning);
    }

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      <div
        onWheel={(e) => e.stopPropagation()}
        className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900/95 shadow-2xl backdrop-blur-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">
                  Field Validation Sync (Mobile App)
                </h2>
                <p className="text-xs text-slate-400">
                  Stage 5: Ground Truth Collection & Model Improvement Loop
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs overflow-y-auto flex-1 custom-scrollbar">
            {/* Target Spring Details */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex justify-between items-center text-slate-400">
                <span className="font-semibold text-white text-sm">
                  {selectedSpring.name} ({selectedSpring.code})
                </span>
                <span className="font-mono text-cyan-300">
                  GPS: 29.5828° N, 79.6436° E
                </span>
              </div>
              <div className="mt-1 text-[11px] text-slate-300">
                Subdistrict: {selectedSpring.subdistrict} • Elevation: {selectedSpring.elevation}
              </div>
            </div>

            {/* Field Observation Input */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Measured Spring Discharge (Liters / Minute)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  required
                  value={dischargeInput}
                  onChange={(e) => setDischargeInput(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-4 py-2.5 text-sm font-mono text-cyan-300 focus:border-cyan-400 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-slate-400 font-mono text-xs">
                  L/min
                </span>
              </div>
            </div>

            {/* Field Observation Notes */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Field Surveyor Notes & Community Feedback
              </label>
              <textarea
                rows={2}
                value={observationNotes}
                onChange={(e) => setObservationNotes(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-slate-950/80 p-3 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>

            {/* Mock Geo-tagged Photo Upload */}
            <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-4 text-center">
              <Camera className="mx-auto h-6 w-6 text-cyan-400 mb-1" />
              <div className="font-semibold text-white">Geo-Tagged Field Photos Attached</div>
              <div className="text-[10px] text-slate-400">
                IMG_20260914_CCT_Binsar.jpg (Metadata verified via device GPS)
              </div>
            </div>

            {/* Continuous Learning Retraining Notification */}
            {retrainMeta && (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/60 p-3 text-xs flex items-center gap-2.5 text-emerald-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-bold">Continuous Learning Retraining Completed!</div>
                  <div className="text-[11px] text-emerald-200/80">
                    Model {retrainMeta.version} updated with sample #{retrainMeta.totalSamples}.
                  </div>
                </div>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 hover:brightness-110 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Syncing Field Observations & Retraining AI...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span>Field Observation Synchronized with Backend!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit to Continuous Learning Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
