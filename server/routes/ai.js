import { Router } from 'express';
import { db } from '../data/mockDb.js';
import { mlModelService } from '../services/mlModelService.js';

const router = Router();

// POST /api/ai/predict - Predict suitability and SHAP attributions for arbitrary features
router.post('/predict', (req, res) => {
  const features = req.body || {};
  const prediction = mlModelService.predictSuitability(features);
  res.json({
    success: true,
    data: prediction,
  });
});

// GET /api/ai/telemetry - Model performance and training telemetry
router.get('/telemetry', (req, res) => {
  res.json({
    success: true,
    data: {
      ...db.modelMetadata,
      totalObservationsLogged: db.fieldObservations.length,
      activeSpringCount: db.springs.length,
    },
  });
});

export default router;
