import { Router } from 'express';
import { z } from 'zod';

const router = Router();

router.post('/signup', (req, res) => {
  const body = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(req.body);
  if (!body.success) return res.status(400).json(body.error);
  res.json({ message: 'signup placeholder' });
});

router.post('/login', (_req, res) => {
  res.json({ message: 'login placeholder' });
});

router.post('/refresh', (_req, res) => {
  res.json({ message: 'refresh placeholder' });
});

export default router;
