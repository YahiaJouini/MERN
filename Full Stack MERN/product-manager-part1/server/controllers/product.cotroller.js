const product=require('../models/products.model')


// adding a product
module.exports.addProduct=(req,res)=>{
    product.create(req.body).then(pr=>res.json(pr))
    .catch(err=>console.log(err))
}