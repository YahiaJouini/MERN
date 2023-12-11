const products=require('../models/products.model')


// adding a product
module.exports.addProduct=(req,res)=>{
    products.create(req.body).then(pr=>res.json(pr))
    .catch(err=>console.log(err))
}

// displaying All products

module.exports.displayProducts = (req,res)=>{
    products.find().then(product=>res.json(product))
    .catch(err=>console.log(err))
}

// get one Product 

module.exports.displayOne = (req,res) => {
    products.findById(req.params.id).then(product=>res.json(product))
    .catch(err=>console.log(err))
}

// update a product

module.exports.updateProduct = (req,res) => {
    products.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(product=>res.json(product))
    .catch(err=>console.log(err))
}

// delete a product 

module.exports.deleteOne = (req,res) => {
    products.deleteOne({_id:req.params.id})
    .then(deleted=>res.json(deleted))
    .catch(err=>console.log(err))
}