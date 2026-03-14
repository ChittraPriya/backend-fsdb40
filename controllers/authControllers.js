const User = require ('../models/user.js')

const authController = {
    registerUser : async(req,res) => {
    try{
        //get the details from the request body
        const {name, email, password} = req.body
        //create a new user objext using user Model
        const newUser = new User({
            name,
            email,
            password
        })

        //save the new user in the database
        const savedUser = await newUser.save();

        const { password : pass, __v , ...userData } = savedUser.toObject();

        return res.status(200).json({message: "User Registered Successfully", user: userData})
    } catch (error) {
        return res.status(500),json({message: `User registration failed: ${error.message}` })
    }
}
}

module.exports = authController