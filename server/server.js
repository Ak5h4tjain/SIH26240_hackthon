import express from 'express';
import cors from 'cors';
import springsRouter from './routes/springs.js';
import optimizerRouter from './routes/optimizer.js';
import fieldValidationRouter from './routes/fieldValidation.js';
import aiRouter from './routes/ai.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logger for MVP telemetry
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'SIH26240 Spring Revival Backend API',
    environment: 'MVP Demo',
    version: '1.0.0',
  });
});

// Register API Routes
app.use('/api/springs', springsRouter);
app.use('/api/optimizer', optimizerRouter);
app.use('/api/field-validation', fieldValidationRouter);
app.use('/api/ai', aiRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Endpoint '${req.originalUrl}' not found.`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server internal error:', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 SIH26240 Spring Revival MVP Backend is running!`);
  console.log(`📡 Local URL: http://localhost:${PORT}`);
  console.log(`🩺 Healthcheck: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
