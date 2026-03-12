const fs = require ('fs');
//To append
fs.readFile('./logs/log.txt',"utf-8", (error,data) => {
    if(error) {
        console.log('Error Reading data to the file', error.message);
        return
    }
    console.log("Data reading to the file")
})