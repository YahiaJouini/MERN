const productController=require('../controllers/product.cotroller')

module.exports=(app)=>{
    app.post('/api/create',productController.addProduct)
}