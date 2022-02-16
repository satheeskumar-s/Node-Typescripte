import express from 'express';
import { authRoutes } from './auth/AuthRoute';
import { userRoutes } from './user/UserRoute';

const router = express.Router();
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
