import User from '../models/user.js';
import { comparePassword } from '../libs/hashPassword.js';
import { generateToken } from '../libs/token.js';
import { getRedis, storeAttempts, blockAuth, storeToken } from '../libs/redis.js';

class noUserAuthorization extends Error {
  constructor(message) {
    super(message);
  }
}
class noOtp extends Error {
  constructor(message) {
    super(message);
  }
}
class confirmOtpAuthorization extends Error {
  constructor(message) {
    super(message);
  }
}
class invalidPassword extends Error {
  constructor(message) {
    super(message);
  }
}
class noAttempts extends Error {
  constructor(message) {
    super(message);
  }
}
class alreadyAuthorized extends Error {
  constructor(message) {
    super(message);
  }
}

const authorization = async (login, password) => {
  const existingUser = await User.findOne({ where: { login } });
  if (!existingUser) {
    return new noUserAuthorization('User is not registered');
  }

  const redisData = await getRedis(existingUser.id);

  /*if user doesnt have OTP and no confirmed mail (isActive false)*/
  if (!redisData?.otp && !existingUser.isActive) {
    return new noOtp('To confirm your profile, please resend OTP to your email and confirm it');
  }
  if (redisData?.otp && !existingUser.isActive) {
    /*if user have OTP and NO confirmed mail */
    return new confirmOtpAuthorization(
      'Firstly user must confirm its email by OTP, that sent to your email',
    );
  }

  const passwordMatch = await comparePassword(password, existingUser.password);
  const attemptsCount = redisData?.attemptsCount || 0;
  const totalAttempts = attemptsCount <= 5;

  if (!passwordMatch && totalAttempts && !redisData?.blocked) {
    if (attemptsCount < 5) {
      await storeAttempts(existingUser.id, attemptsCount + 1);
      return new invalidPassword(`Invalid password, try again`);
    }
    if (totalAttempts) {
      await blockAuth(existingUser.id);
      return new noAttempts(`Authorization blocked for 2 minute, try again later`);
    }
  }
  if (redisData?.blocked) {
    return new noAttempts(`Authorization blocked for 2 minute, try again later`);
  }

  if (redisData?.token) {
    return new alreadyAuthorized(`User already authorized`);
  }
  if (
    !redisData?.otp &&
    existingUser.isActive &&
    attemptsCount < 5 &&
    (await comparePassword(password, existingUser.password))
  ) {
    const authToken = generateToken(64);
    await storeToken(existingUser.id, authToken);
    const redisData = await getRedis(existingUser.id);

    return {
      message: `User authorized succesfully, your authorization token: ${redisData.token}`,
    };
  }
};

export {
  noUserAuthorization,
  noOtp,
  confirmOtpAuthorization,
  invalidPassword,
  noAttempts,
  alreadyAuthorized,
  authorization,
};
