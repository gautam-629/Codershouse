import crypto from 'crypto';
import HashService from './hashService';
const SMS_FROM_NUMBER = "+15672758135";
const SMS_SID = "ACb00e0d015e66b38734d126405d11b784";
const SMS_AUTH = "57927359e44ae7f90e488d8e981f0b89";

const twilo = require('twilio')(SMS_SID, SMS_AUTH, {
  lazyLoading: true,
})
class otpServices {
  static async generateOtp() {
    const otp = await crypto.randomInt(1000, 9999);
    return otp;
  }
  static async sendBySms(phone, otp) {
    return await twilo.messages.create({
      to: phone,
      from: SMS_FROM_NUMBER,
      body: `Your coders otp is ${otp}`
    })
  }
 static verifyOtp(hashOtp, data) {
    const computedHash = HashService.hashOtp(data);
    return computedHash === hashOtp;

  }
}

export default otpServices;