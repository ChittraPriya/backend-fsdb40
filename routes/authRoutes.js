const express = require ('express');
const { registerUser } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/register', registerUser)

module.exports = authRouter