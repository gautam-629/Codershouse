import jwt from 'jsonwebtoken'
import {accessTokenSecret,refreshTokenSecret} from '../Config'
class TokenServices{
    static generateAccessToken(payload){
        return jwt.sign(payload,accessTokenSecret,{ expiresIn:'1h'});
      }
        
        static generateRefressToken(payload){
        return  jwt.sign(payload,refreshTokenSecret,{ expiresIn:'1h'})
       }
}

export default TokenServices;