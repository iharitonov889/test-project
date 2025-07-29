import User from '../models/user.js';
import { generateOtp } from '../libs/otp.js';
import { sendOtp } from './otpMail.js';
import { storeOtp } from '../libs/redis.js';
import { hashPassword } from '../libs/hashPassword.js';

class emailValidation extends Error {
  constructor(message) {
    super(message);
  }
}
class emailRegistered extends Error {
  constructor(message) {
    super(message);
  }
}
class passwordValidation extends Error {
  constructor(message) {
    super(message);
  }
}

const registerUser = async (login, password, email, phone) => {
  const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (!emailRegex.test(email)) {
    return new emailValidation(
      "The email can contain only latin characters or digits, and special letter '@'",
    );
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return new emailRegistered('User with this email already registered');
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return new passwordValidation(
      'The password must contain at least 8 characters, uppercase and lowercase latin letter, digit and a special character',
    );
  }

  if (emailRegex.test(email) && passwordRegex.test(password)) {
    const hashedPassword = await hashPassword(password);
    const otp = await generateOtp();
    await sendOtp(email, otp);
    await User.create({ login, password: hashedPassword, email, phone });
    const registeredUser = await User.findOne({ where: { email } });
    await storeOtp(registeredUser.id, otp);
    return {
      message: `Congratulations on successful registration, your ID: ${registeredUser.id}, now confirm your OTP, that sent to your email`,
    };
  }
};

export { emailValidation, emailRegistered, passwordValidation, registerUser };
//
