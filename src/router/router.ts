import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
router.post('/registration', userController.registerUser);
//router.post("/confirmOtp", userController.confirmOtp);
export default router;
