import Router from 'express';
import userRouter from './userRouter.js';
import animalRouter from './animalRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/animal', animalRouter);

export default router;
