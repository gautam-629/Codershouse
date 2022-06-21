import dotevn from 'dotenv';
dotevn.config();
export const{
    APP_PORT,
    HASH_SECRET,
    SMS_SID,
    SMS_AUTH,
    SMS_FROM_NUMBER,
    DB_URL,
    accessTokenSecret,
    refreshTokenSecret
}=process.env;