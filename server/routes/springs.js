import { Router } from 'express';
import { db } from '../data/mockDb.js';

const router = Router();

// GET /api/springs - List all springs
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: db.springs.length,
    data: db.springs,
  });
});

// GET /api/springs/:id - Get detailed spring profile
router.get('/:id', (req, res) => {
  const spring = db.springs.find((s) => s.id === req.params.id);
  if (!spring) {
    return res.status(404).json({
      success: false,
      error: `Spring with id '${req.params.id}' not found.`,
    });
  }
  res.json({
    success: true,
    data: spring,
  });
});

export default router;
