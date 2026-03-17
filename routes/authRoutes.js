const express = require ('express');
const { registerUser, loginUser, me, logout } = require('../controllers/authControllers.js');
const {isAuthenticated} = require ('../middleware/auth.js')

const authRouter = express.Router();
//public routes
authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

//protected routes
authRouter.post('/me',isAuthenticated, me)
authRouter.post('/logout',isAuthenticated, logout)


module.exports = authRouter