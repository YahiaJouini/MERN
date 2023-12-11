const mongoose=require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"you have to provide a setup"]
    },
    punchline: {
        type:String,
        required:[true,"you have to provide a punchline"]
    }
},{timestamps:true})

module.exports=mongoose.model('JokeSchema',JokeSchema)