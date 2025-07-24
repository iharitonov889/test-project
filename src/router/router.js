import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/registration', userController.registerUser);
router.post('/confirmOtp', userController.confirmOtp);
router.post('/resendOtp', userController.resendOtp);

router.post('/authorization', userController.authUser);

export default router;

//http://localhost:9000/user/registration
