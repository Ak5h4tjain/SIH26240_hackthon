import { Router } from 'express';
import { db } from '../data/mockDb.js';
import { mlModelService } from '../services/mlModelService.js';
import { aiChatService } from '../services/aiChatService.js';

const router = Router();

// POST /api/ai/chat - Conversational AI Hydrogeologist assistant
router.post('/chat', async (req, res) => {
  try {
    const { message = '', context = {} } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a string.',
      });
    }

    const response = await aiChatService.generateResponse(message, context);
    res.json({
      success: true,
      data: response,
    });
  } catch (err) {
    console.error('AI chat error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Internal AI service error',
    });
  }
});

// POST /api/ai/simulate - Climate what-if simulation (rainfall adjustment)
router.post('/simulate', (req, res) => {
  try {
    const { rainfallMultiplier = 1.0 } = req.body;
    const numMult = Math.max(0.4, Math.min(2.0, parseFloat(rainfallMultiplier) || 1.0));
    const result = mlModelService.simulateClimateScenario(numMult);
    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error('Climate simulation error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Climate simulation error',
    });
  }
});

// POST /api/ai/predict - Predict suitability and SHAP attributions for arbitrary features
router.post('/predict', (req, res) => {
  try {
    const features = req.body || {};
    const prediction = mlModelService.predictSuitability(features);
    res.json({
      success: true,
      data: prediction,
    });
  } catch (err) {
    console.error('Model prediction error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Model prediction error',
    });
  }
});

// GET /api/ai/telemetry - Model performance and training telemetry
router.get('/telemetry', (req, res) => {
  res.json({
    success: true,
    data: {
      ...db.modelMetadata,
      totalObservationsLogged: db.fieldObservations.length,
      activeSpringCount: db.springs.length,
      methodology: 'SIH26240 15-Cell PySheds-SRTM-SoilGrids Pipeline',
    },
  });
});

export default router;
