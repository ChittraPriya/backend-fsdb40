const http = require ('http');

//create server

const server = http.createServer((req,res) =>{
    //output as json format
     res.writeHead(200,{
         "Content-type" : "application/json"
     })
     res.end(JSON.stringify({ message: 'Hello NodeJS' }));
});
//start server
server.listen(3001, "127.0.0.1", ()=>{
    console.log("Server is connected at http://127.0.0.1:3001 ...")
})