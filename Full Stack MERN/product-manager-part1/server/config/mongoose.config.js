const mongoose=require('mongoose')
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.dbName}`)
.then(()=>console.log('first')).catch(err=>console.log(err))