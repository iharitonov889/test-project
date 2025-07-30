import Router from 'express';

import userRouter from './userRouter.js';
import animalRouter from './animalRouter.js';
import animalCardRouter from './animalCardRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/animal', animalRouter);
router.use('/animalCard', animalCardRouter);

export default router;
