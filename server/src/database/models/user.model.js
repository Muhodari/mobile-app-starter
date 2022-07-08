import mongoose from "mongoose";
import { registerSchema } from "swaggiffy";

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    nationalId:{
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    password: {
        type: String,

    }
});

registerSchema('User',Schema, {orm: 'mongoose'});
const User = mongoose.model("User", Schema);
export default User;