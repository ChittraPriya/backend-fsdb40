const fs = require ('fs');
//To append
fs.appendFile('./logs/log.txt',"\nWelcome", (error) => {
    if(error) {
        console.log('Error append data to the file', error.message);
        return
    }
    console.log("Data append to the file")
})