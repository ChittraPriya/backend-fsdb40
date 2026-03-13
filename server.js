const app = require('./app.js')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Connected to mongodb database')
    //start the express application
app.listen(3000,(error)=>{
    if(error){
        console.log("Error Starting the server",error.message)
        return;
    }
    console.log("server is listenting at http://localhost:3000 ....")
})
})
.catch((error) => {
    console.log('Error connecting to mongodb database...', error.message)
})