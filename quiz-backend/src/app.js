import express from 'express';
import questionRoutes from './routes/questions.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/questions', questionRoutes);

export default app;
