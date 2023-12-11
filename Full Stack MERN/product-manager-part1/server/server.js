const express= require('express')

require('dotenv').config()
require('./config/mongoose.config')

const PORT = process.env.PORT
const app = express()


// middleWare
app.use(express.json(),express.urlencoded({extended:true}))
const routes=require('./routes/products.routes')
routes(app)



app.listen(PORT,()=>console.log(`the server is running on port ${PORT}`))
