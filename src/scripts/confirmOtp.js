import User from '../models/user.js';
import { delRedis, /*storeActivation,*/ getRedis } from '../libs/redis.js';

class noUserConfirm extends Error {
  constructor(message) {
    super(message);
  }
}
class nullOtp extends Error {
  constructor(message) {
    super(message);
  }
}
class otpMatch extends Error {
  constructor(message) {
    super(message);
  }
}
class isActivated extends Error {
  constructor(message) {
    super(message);
  }
}
const confirmOtp = async (clientId, clientOtp) => {
  const redisOtp = await getRedis(clientId);

  const existingUser = await User.findOne({ where: { id: clientId } });

  if (!existingUser) {
    return new noUserConfirm('User not found, please check your ID');
  }
  if (redisOtp === null) {
    return new nullOtp('To confirm your email, please resend OTP code');
  }
  if (clientOtp != redisOtp.otp && !existingUser.isActive) {
    return new otpMatch('Error in OTP input, please check your OTP and try again');
  }
  if (existingUser.isActive == true) {
    return isActivated('Congratulations, your email already confirmed');
  }

  if (clientOtp == redisOtp.otp && existingUser.isActive == false) {
    /*make new redis after activation*/

    /*await storeActivation(clientId);*/
    await delRedis(clientId);
    existingUser.isActive = true;
    await existingUser.save();
    return {
      message: 'Congratulations, you successfully confirmed your email',
    };
  }
};

export { noUserConfirm, nullOtp, otpMatch, isActivated, confirmOtp };
