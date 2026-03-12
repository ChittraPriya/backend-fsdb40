const app = require('./app.js')

//start the express application
app.listen(3000,(error)=>{
    if(error){
        console.log("Error Starting the server",error.message)
        return;
    }
    console.log("server is listenting at http://localhost:3000 ....")
})
