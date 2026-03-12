const fs = require ('fs');
//To append
fs.unlink('./log.txt', (error) => {
    if(error) {
        console.log('Error Deleting data to the file', error.message);
        return
    }
    console.log("File Delete Successsfully");
})