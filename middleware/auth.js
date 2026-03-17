const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = {
    isAuthenticated: (req,res,next) => {
         try {
                    //get the token
                    const token = req.cookies?.token
    
                    //check if the token is present
                    if(!token) {
                        return res.status(401).json({message: 'User not Logged in'})
                    }

                    //is token is valid
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);

                    //if decode is null, token is invalid
                    if(!decoded){
                    return res.status(403).json({message: 'Unauthorized Access'})
                    }

                    //get user id from the token
                    req.userId = decoded.id

                    //return the currently logged in user
                    //call middleware
                    next();
                } catch (error) {
                     return res.status(500).json({message: `error Fetching user data: ${error.message}` })
                }
    },
    allowedRules: (roles) => {
        return async (req,res,next) => {
            try{
            //get userid from the request object
            const userId = req.userId;
            //get the logged in user object from the database
            const user = await User.findById(userId);
            //get the role of the user
            const role = user.role;
            //check if the role is in the allowed rules
            if(!roles.includes(user.role)) {
                //return an error
                return res.status(401).json({message: "Unauthorised access"})
            }
            //allow the user to the next middleware
            next();
        }catch(error) {
            return res.status(500).json({ message: error.message });
        }
        }
    }
}
module.exports = auth