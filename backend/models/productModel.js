//creating user Schema
//importing mongoose 
import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{ //its an individual rating
        type: Number,
        required:true,
        
    },
    comment:{
        type: String,
        required:true
    },
}, {timestamps:true})

const productSchema = mongoose.Schema({
    //here will be the schema

    //check who created this product 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requierd:true,
        ref:'User'// its refering User model
    },
    name: {
        type: String,
        required : true
    },
    image: {
        type: String,
        required : true,
        
    },
    brand: {
        type: String,
        required : true
    },
    category: {
        type: String,
        required : true,
        
    },
    description: {
        type: String,
        required : true
    },
    reviews : [reviewSchema],
    rating: { //its average rating of all the buyers
        type: Number,
        required : true,
        default:0
    },
    numReviews: {
        type: Number,
        required : true,
        default:0
    },
    price: {
        type: Number,
        required : true,
        default:0
    },
    countInStock: {
        type: Number,
        required : true,
        default:0
    },
},
{
    timestamps:true
})

const Product = mongoose.model('Product', productSchema)
export default Product