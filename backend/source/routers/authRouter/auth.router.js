const express = require('express')

const authRouter = express.Router()
const authController = require('../../controllers/authController/auth.controller')


authRouter.route('/signup')
.post(authController.signup)







module.exports = authRouter
