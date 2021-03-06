//creating user Schema
//importing mongoose 
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    //here will be the schema
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique:true
    },
    password: {
        type: String,
        required : true
    },
    isAdmin: {
        type: Boolean,
        required : true,
        default:false
    },
    name: {
        type: String,
        required : true
    }
},
{
    timestamps:true
})

const User = mongoose.model('User', userSchema)
export default User