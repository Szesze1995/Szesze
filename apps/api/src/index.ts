import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import authRouter from './routes/auth';

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

app.get('/health', (_req, res) => res.send('OK'));
app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API running on ${port}`);
});
