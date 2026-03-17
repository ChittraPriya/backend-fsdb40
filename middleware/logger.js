const logger = async(req,res,next) => {
    const time = Date.now();
    res.on("finish", () => {
console.log("Request Received")
console.log("At:" , new Date(time).toISOString())
console.log("URL:" , `http://localhost:3000/${req.url}`)
console.log('Method', req.method)
console.log('Body', JSON.stringify(req.body))
console.log('Cookies', JSON.stringify(req.cookies))
console.log('Status Code:', res.statusCode)
console.log('Duration:', Date.now() - time)
console.log('----------------------------------')
console.log()
    })
next();
} 

module.exports = logger