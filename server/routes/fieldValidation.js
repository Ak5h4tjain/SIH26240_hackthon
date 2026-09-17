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

// POST /api/field-validation - Submit mobile app ground survey observation
router.post('/', (req, res) => {
  const {
    springId,
    discharge,
    surveyor = 'Field Hydrologist Team',
    notes = '',
    gpsCoords = { lat: 29.5828, lng: 79.6436 },
  } = req.body;

  if (!springId) {
    return res.status(400).json({
      success: false,
      error: 'springId is required.',
    });
  }

  const numDischarge = Number(discharge);
  if (isNaN(numDischarge) || numDischarge < 0) {
    return res.status(400).json({
      success: false,
      error: 'Valid discharge value is required.',
    });
  }

  const newRecord = {
    id: `obs-${Date.now().toString().slice(-4)}`,
    springId,
    surveyor,
    timestamp: new Date().toISOString(),
    discharge: numDischarge,
    notes,
    gpsCoords,
    verified: true,
  };

  db.fieldObservations.push(newRecord);

  // Trigger continuous learning feedback loop
  const retrainResult = mlModelService.retrainWithNewObservation(newRecord);

  res.status(201).json({
    success: true,
    message: 'Field observation recorded and synced with AI feedback loop.',
    data: newRecord,
    continuousLearning: retrainResult,
  });
});

export default router;
