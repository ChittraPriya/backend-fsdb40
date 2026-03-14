const User = require ('../models/user.js')
const bcrypt = require ('bcrypt')

const authController = {
    registerUser : async(req,res) => {
    try{
        //get the details from the request body
        const {name, email, password} = req.body
        //check if user is already exist
        const user = await User.find({email})
        if(user.length > 0) {
            //user already exist
            //do not allow the user to register
            return res.status(400).json({message: 'User Already Registered'})
        }

        //password encrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        
        //create a new user objext using user Model
        const newUser = new User({
            name,
            email,
            password : hashedPassword
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