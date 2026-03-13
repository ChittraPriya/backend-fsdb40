const app = require('./app.js')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Connected to mongodb database')
    //start the express application
    const PORT = process.env.PORT || 3000
app.listen(PORT,(error)=>{
    if(error){
        console.log("Error Starting the server",error.message)
        return;
    }
    console.log(`Server is listenting at http://localhost:${PORT} ....`)
})
})
.catch((error) => {
    console.log('Error connecting to mongodb database...', error.message)
})