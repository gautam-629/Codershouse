import crypto from 'crypto';
import {HASH_SECRET} from '../Config'
class HashService{
    static  hashOtp(data){
     //  crypto.randomBytes(64).toString('hex')
       return crypto.createHmac('sha256',HASH_SECRET).update(data).digest('hex');

      }
}

export default HashService;