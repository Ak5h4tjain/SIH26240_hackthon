import { Router } from 'express';
import { db } from '../data/mockDb.js';

const router = Router();

// GET /api/springs/summary - Get project summary
router.get('/summary', (req, res) => {
  res.json({
    success: true,
    data: db.projectSummary,
    meta: db.modelMetadata,
  });
});

// GET /api/springs - List springs with optional filters
router.get('/', (req, res) => {
  const { top15, fieldVerification, status, search } = req.query;

  let results = [...db.springs];

  if (top15 === 'true') {
    results = results.filter((s) => s.isTop15);
  }

  if (fieldVerification === 'true') {
    results = results.filter((s) => s.isFieldVerificationRequired);
  }

  if (status) {
    results = results.filter((s) => s.rawStatus?.toLowerCase() === status.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (s) =>
        s.name?.toLowerCase().includes(q) ||
        s.code?.toLowerCase().includes(q) ||
        String(s.slNo).includes(q) ||
        s.geology?.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: results.length,
    total: db.springs.length,
    data: results,
  });
});

// GET /api/springs/:id - Get detailed spring profile
router.get('/:id', (req, res) => {
  const spring = db.springs.find(
    (s) => s.id === req.params.id || String(s.slNo) === req.params.id || s.code === req.params.id
  );
  if (!spring) {
    return res.status(404).json({
      success: false,
      error: `Spring '${req.params.id}' not found in Darjeeling dataset.`,
    });
  }
  res.json({
    success: true,
    data: spring,
  });
});

export default router;
