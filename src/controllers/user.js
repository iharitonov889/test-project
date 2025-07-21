import {
  emailValidation,
  emailRegistered,
  passwordValidation,
  registerUser,
} from '../scripts/registration.js';
import { confirmOtp } from '../scripts/confirmOtp.js';

const userController = {
  registerUser: async (req, res) => {
    const { email, password } = req.body;
    const classInstance = registerUser(email, password);

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
    const data = confirmOtp();
    res.json(data);
  },
};

export default userController;
