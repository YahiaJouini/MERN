const productController=require('../controllers/product.cotroller')

module.exports=(app)=>{
    app.post('/api/create',productController.addProduct)
    app.get('/api/products',productController.displayProducts)
    app.get('/api/products/:id',productController.displayOne)
    app.patch('/api/edit/:id',productController.updateProduct)
    app.delete('/api/delete/:id',productController.deleteOne)
}