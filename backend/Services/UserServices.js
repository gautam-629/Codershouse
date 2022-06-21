import userModel from '../models/UserModel'

class UserServices{
       static async findUser(filter){
           const user= await userModel.findOne(filter)
           return user;
        }

        static async createUser(filter){
            const user= await userModel.create(filter)
            return user;
         }
}

export default UserServices;