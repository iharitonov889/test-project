import config from '../../config/config.js';
import nodemailer from 'nodemailer';

const sendOtp = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: config.mail.service,
    auth: {
      user: config.mail.user,
      pass: config.mail.password,
    },
  });

  const mailOption = {
    from: config.mail.user,
    to: email,
    subject: 'Your OTP registration code',
    text: `Your OTP code: ${otp}. Don't tell it to anyone.`,
  };

  await transporter.sendMail(mailOption);
};

export { sendOtp };
