const http = require ('http');

//create server
const server = http.createServer((req,res) =>{
    res.end('Response of NodeJs is Successfull');
})
//start server
server.listen(3001, "127.0.0.1", ()=>{
    console.log("Server is connected at http://127.0.0.1:3001 ...")
})