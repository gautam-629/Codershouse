import otpServices from "../Services/OtpServices";
import HashService from "../Services/hashService";
import UserServices from '../Services/UserServices';
import TokenServices from "../Services/tokenServices";
class AuthController{
   static async sendOtp(req,res,next){
         const{phone}=req.body;
         if(!phone){
            res.status(400).json({message:'phone field required'})
         }
         const otp= await otpServices.generateOtp();
         //hash
         const ttl=1000*60*2;// time 2 min
         const expire=Date.now()+ ttl;
         const data=`${phone}.${otp}.${expire}`
         const hash=HashService.hashOtp(data);
         
         //send otp
        try {
         // await otpServices.sendBySms(phone,otp);
         res.json({hash:`${hash}.${expire}`,phone,otp})

        } catch (error) {
         console.log(error);
          return res.status(5000).json({message:'message sending fail'})
        }
         
    }

   static async verifyOtp(req,res,next){
        const{otp,phone,hash}=req.body;
        
        if(!otp || !phone || !hash){
         res.status(400).json({message:'All field are required'});
        }

        const[hashOtp,expires]=hash.split('.');

        if(Date.now()> +expires){
           res.status(400).json({message:'OTP expired'})
        }
        
        const data=`${phone}.${otp}.${expires}`;
        const isValid= otpServices.verifyOtp(hashOtp,data);

        if(!isValid){
         res.status(400).json({message:'Invalid otp'})
        }
         
        let user;

        try {
            user= await UserServices.findUser({phone:phone})
            if(!user){
             user= await UserServices.createUser({phone:phone})
            }
        } catch (error) {
          console.log(error);
          res.status(500).json({message:'DB error'});
        }

        //token
        const accessToken=TokenServices.generateAccessToken({id:user._id,activated:false})
        const refreshToken=TokenServices.generateRefressToken({id:user._id,activated:false})
         
        

        res.cookie('refreshToken',refreshToken,{
         maxAge: 24 * 60 * 60 * 1000,  
         httpOnly:'true'
        });

        res.json({acccessToken:accessToken})
  
   }
}

export default AuthController;