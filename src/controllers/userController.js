import {
  emailValidation,
  emailRegistered,
  passwordValidation,
  registerUser,
} from '../scripts/registration.js';
import { noOtp, nullOtp, otpMatch, isActivated, confirmOtp } from '../scripts/confirmOtp.js';
import {
  noUser,
  userAuth,
  otpSent,
  changePass,
  otpAlive,
  resendOtp,
} from '../scripts/resendOtp.js';
import { authorization } from '../scripts/authorization.js';

const userController = {
  registerUser: async (req, res) => {
    const { login, password, email, phone } = req.body;
    const classInstance = await registerUser(login, password, email, phone);
    if (classInstance instanceof emailValidation) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof emailRegistered) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof passwordValidation) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance.message) {
      return res.status(200).json({
        message: `${classInstance.message}`,
      });
    }
  },

  confirmOtp: async (req, res) => {
    const { clientId, clientOtp } = req.body;
    const classInstance = await confirmOtp(clientId, clientOtp);
    if (classInstance instanceof noOtp) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof nullOtp) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof otpMatch) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof isActivated) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance.message) {
      return res.status(200).json({
        message: `${classInstance.message}`,
      });
    }
  },

  resendOtp: async (req, res) => {
    const { clientId } = req.body;
    const classInstance = await resendOtp(clientId);
    if (classInstance instanceof noUser) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof userAuth) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof otpSent) {
      return res.status(201).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof changePass) {
      return res.status(202).json({
        error: `${classInstance.message}`,
      });
    }
    if (classInstance instanceof otpAlive) {
      return res.status(400).json({
        error: `${classInstance.message}`,
      });
    }
  },

  authUser: async (req) => {
    const { login, password } = req.body;
    await authorization(login, password);
  },
};

export default userController;
