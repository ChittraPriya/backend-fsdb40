const http = require ('http');

//create server

const server = http.createServer((req,res) =>{
    //output as json format
    // res.writeHead(200,{
    //     "Content-type" : "application/json"
    // })
    //  res.end(JSON.stringify({ message: 'Hello NodeJS' }));


    //output as text
    //  res.writeHead(200,{
    //       "Content-type" : "text/plain"
    //  })

    //  res.end('Hello NodeJS');

    //output as html
    res.writeHead(200, {
        'Content-type' : "text/html"
    })

    res.end(`
        <!doctye html>
        <html>
        <head>
        <title> Test Nodejs API Server
        </title>
        </head>
        <body>
        <h1>Hello NodeJs</h1>
        </body>
        </html>
        `);
});
//start server
server.listen(3001, "127.0.0.1", ()=>{
    console.log("Server is connected at http://127.0.0.1:3001 ...")
})