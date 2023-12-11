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