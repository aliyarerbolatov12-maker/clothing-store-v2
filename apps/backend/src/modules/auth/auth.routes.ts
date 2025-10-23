import express, { Router } from 'express';
import { register } from '@/modules/auth/auth.controller';

const router = express.Router();

router.post('/register', register);

export default router;
