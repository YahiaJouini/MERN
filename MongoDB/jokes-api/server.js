const express=require("express")
require('dotenv').config() 

const app = express()
const PORT=process.env.PORT

app.use(express.json(),express.urlencoded({extended:true}))
require('./config/mongoose.config')
const routes=require('./routes/jokes.routes')
routes(app)

app.listen(PORT,()=>console.log('the server is running'))
