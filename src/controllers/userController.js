import {
  emailValidation,
  emailRegistered,
  passwordValidation,
  registerUser,
} from '../scripts/registration.js';
import { confirmOtp } from '../scripts/confirmOtp.js';

const userController = {
  registerUser: (req, res) => {
    const { name, password, email, phone } = req.body;
    const classStatus = registerUser(name, password, email, phone);
    if (classStatus.message) {
      return res.status(200).json({
        message: `${classStatus.message}`,
      });
    }
    if (classStatus instanceof emailValidation) {
      return res.status(400).json({
        error: `${classStatus.message}`,
      });
    }
    if (classStatus instanceof emailRegistered) {
      return res.status(400).json({
        error: `${classStatus.message}`,
      });
    }
    if (classStatus instanceof passwordValidation) {
      return res.status(400).json({
        error: `${classStatus.message}`,
      });
    }
  },

  confirmOtp: (req, res) => {
    const data = confirmOtp();
    res.json(data);
  },
};

export default userController;
/*const userController = {


};*/

/*async () => {


    }}*/
