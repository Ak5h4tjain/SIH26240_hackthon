import { Router } from 'express';
import { db } from '../data/mockDb.js';
import { mlModelService } from '../services/mlModelService.js';

const router = Router();

// GET /api/field-validation - Retrieve survey log
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: db.fieldObservations.length,
    data: db.fieldObservations,
  });
});

// POST /api/field-validation - Submit mobile app or citizen ground survey observation
router.post('/', (req, res) => {
  const {
    springId,
    springCode,
    discharge,
    surveyor = 'Local Resident / Community Surveyor',
    contact = '',
    clarity = 'clear',
    flowCondition = 'good',
    notes = '',
    photoUrl = null,
    gpsCoords = { lat: 27.0382, lng: 88.2631 },
  } = req.body;

  const targetSpringId = springId || springCode || 'spring-1';

  let numDischarge = Number(discharge);
  if (isNaN(numDischarge) || numDischarge < 0) {
    numDischarge = flowCondition === 'good' ? 18.0 : flowCondition === 'moderate' ? 8.5 : 1.2;
  }

  const newRecord = {
    id: `obs-${Date.now().toString().slice(-4)}`,
    springId: targetSpringId,
    surveyor: (surveyor && surveyor.trim()) ? surveyor.trim() : 'Local Resident / Community Surveyor',
    contact: contact ? contact.trim() : '',
    clarity,
    flowCondition,
    photoUrl,
    timestamp: new Date().toISOString(),
    discharge: numDischarge,
    notes: (notes && notes.trim()) ? notes.trim() : 'Community ground truth report',
    gpsCoords,
    verified: true,
  };

  db.fieldObservations.unshift(newRecord);

  // Trigger continuous learning feedback loop
  let retrainResult = null;
  try {
    retrainResult = mlModelService.retrainWithNewObservation(newRecord);
  } catch (e) {
    console.warn('ML retrain warning:', e.message);
  }

  res.status(201).json({
    success: true,
    message: 'Field observation recorded and synced with AI feedback loop.',
    data: newRecord,
    count: db.fieldObservations.length,
    continuousLearning: retrainResult,
  });
});

export default router;
