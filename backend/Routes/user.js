import express from 'express';
import { signup, login, getProfile } from '../controllers/user.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authenticateToken, getProfile); //

export default router;

