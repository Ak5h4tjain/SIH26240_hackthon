import { Router } from 'express';
import { optimizerService } from '../services/optimizerService.js';

const router = Router();

// POST /api/optimizer - Optimize intervention allocation and water recharge yield
router.post('/', (req, res) => {
  const { budget = 1850000 } = req.body;

  const numBudget = Number(budget);
  if (isNaN(numBudget) || numBudget < 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid budget parameter. Must be a non-negative number.',
    });
  }

  const result = optimizerService.optimizeBudget(numBudget);
  res.json({
    success: true,
    data: result,
  });
});

export default router;
