const mongoose=require('mongoose')

const productSchema= new mongoose.Schema({
    title : {
        type:String,
        required:[true,"the title is required"]
    },
    price : {
        type:Number,
        required:[true,"the price is required"]
    },
    description : {
        type : String,
        required:[true,"the description is required"]
    }
},{timestamps:true})

module.exports = mongoose.model("productSchema", productSchema)