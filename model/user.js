import {Schema,models,model} from "mongoose";

const userSchema=new Schema({
    username:String,
    email:String,
    phoneno:Number,
    company:String
});

const Users = models.user|| model('user',userSchema)
export default Users;