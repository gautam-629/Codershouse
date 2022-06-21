import express from 'express';
let router=express.Router();
import AuthController from '../Controller/AuthController'
router.post('/send-otp',AuthController.sendOtp);
router.post('/verify-otp',AuthController.verifyOtp)
export default router;