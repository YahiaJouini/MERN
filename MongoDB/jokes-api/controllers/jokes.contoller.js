const JokeSchema=require('../models/jokes.model')


// displaying all jokes

module.exports.DisplayAll = (req,res)=>{
    JokeSchema.find().then(jokes=>res.json({allJokes:jokes}))
    .catch(err=>console.log(err))
}

// displaying a single joke

module.exports.DisplayJoke=(req,res)=>{
    JokeSchema.findById(req.params.id).then(joke=>res.json(joke))
    .catch(err=>console.log(err))
}

// adding a joke

module.exports.addJoke=(req,res)=>{
    JokeSchema.create(req.body).then(joke=>res.json(joke))
    .catch(err=>console.log(err))
}

// updating a joke

module.exports.updateJoke=(req,res)=>{
    JokeSchema.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(updated=>res.json(updated))
    .catch(err=>console.log(err))
}

// deleting a joke

module.exports.DeleteJoke=(req,res)=>{
    JokeSchema.deleteOne({_id:req.params.id})
    .then(deleted=>res.json(deleted))
    .catch(err=>console.log(err))
}