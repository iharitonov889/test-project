import User from '../models/user.js';
import { generateOtp } from '../libs/otp.js';
import { sendOtp } from './otpMail.js';
import { getRedis, storeOtp } from '../libs/redis.js';

class noUser extends Error {
  constructor(message) {
    super(message);
  }
}
class userAuth extends Error {
  constructor(message) {
    super(message);
  }
}
class otpSent extends Error {
  constructor(message) {
    super(message);
  }
}
class changePass extends Error {
  constructor(message) {
    super(message);
  }
}
class otpAlive extends Error {
  constructor(message) {
    super(message);
  }
}

const resendOtp = async (clientId) => {
  const existingUser = await User.findOne({ where: { id: clientId } });
  if (!existingUser) {
    return new noUser('User not found, please check your ID and try again');
  }
  console.log(redisData);
  const redisData = await getRedis(clientId); /*otp OR active*/

  if (redisData?.token) {
    return new userAuth('Error, user authorized');
  }

  if (!redisData && existingUser.isActive == false) {
    const otp = await generateOtp(); /*generate code*/
    await sendOtp(existingUser.email, otp); /*mail the code*/

    await storeOtp(clientId, otp); /*unite the user with his OTP*/
    return new otpSent(`Now confirm your OTP, that send to your email`);
  }

  if (existingUser.isActive == true) {
    const otp = await generateOtp(); /*generate code*/
    await sendOtp(existingUser.email, otp); /*mail the code*/

    await storeOtp(clientId, otp); /*unite the user with his OTP*/
    return new changePass(`Now you can change your password`);
  }

  if (redisData.otp) {
    return new otpAlive('Check your email for OTP code');
  }
};
export { noUser, userAuth, otpSent, changePass, otpAlive, resendOtp };
/*  if (existingUser.isActive == true) {
    return res.status(201).json({
      message: "Congratulations, your email already activated",
    });
  }*/
