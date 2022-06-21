import mongoose from 'mongoose'

let userSchema=new mongoose.Schema({
    phone:{type:String,required:true},
    activated:{type:Boolean,required:false,default:false}
},{timestamps:true})

export default mongoose.model('User',userSchema,'users');