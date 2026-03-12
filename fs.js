const fs = require ('fs');

fs.writeFile('./logs/log.txt',"Hello, Welocome to the world", (error) => {
    if(error) {
        console.log('Error writing data to the file', error.message);
        return
    }
    console.log("Data written to the file")
})