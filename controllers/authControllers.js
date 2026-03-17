const User = require ('../models/user.js')
const bcrypt = require ('bcrypt')
const jwt = require ("jsonwebtoken")
require ('dotenv').config();

const authController = {
    registerUser : async(req,res) => {
    try{
        //if no users in the system
        //if this is the first user
        //create the user as an admin

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
        //check if this user is a first user
        const users = await User.find();
        if(users.length == 0){
            //add the role field to the newUser exists
            newUser.role = 'admin'
        }

        //save the new user in the database
        const savedUser = await newUser.save();

        const { password : pass, __v , ...userData } = savedUser.toObject();

        return res.status(200).json({message: "User Registered Successfully", user: userData})
    } catch (error) {
        return res.status(500).json({message: `User registration failed: ${error.message}` })
    }
},
    loginUser : async(req,res) => {
        try {
            //get the details from the request
            const {email, password} = req.body
            //get the user with the emailfrom the database
            const user = await User.find({email});
            //check if the user is already registered
            if(user.length == 0){
                //no such user
                return res.status(500).json({message: "User not Registered"})
            }
            //check password match
            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            if(!isPasswordValid){
                //password incorrect
                return res.status(400).json({message: "Password Incorrect"})
            }

            //if login successfull,generate a token
            const token = await jwt.sign({id: user[0]._id}, process.env.JWT_SECRET, {expiresIn: "3h"})
            //store the browsers cookie  //store the browser cookies
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: "Strict"
            })
            //both user already exists
            //password correct
            return res.status(200).json({message: "Login Successfully", token})
        } catch (error) {
             return res.status(500).json({message: `User login failed: ${error.message}` })
        }
    },
    me: async(req,res) => {
        try {
            //get the userId of the logged in user from the request object
            const userId = req.userId;

            //get user id from the token
            const user =  await User.findById(userId).select('-password -__v')

            //return the currently logged in user
            return res.status(200).json({message: 'User Logged in',user: user})

        } catch (error) {
             return res.status(500).json({message: `Error Fetching user data: ${error.message}` })
        }
    },
    logout : async(req,res) =>{
        try {//clear the cookie from the browser
            return res.status(500).json({message: "Logout Successful" })
        } catch (error) {
            return res.status(500).json({message: `Logout Failed: ${error.message}` })
        }
    }
}

module.exports = authController