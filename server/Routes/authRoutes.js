const express = require('express')
const { sendOTP, login, verifyotp, logout, checksession } = require('../controllers/authController.js')

const routerAuth=express()

routerAuth.post('/login',login)
routerAuth.post('/logout',logout)
routerAuth.post('/verifyotp',verifyotp)
routerAuth.get('/checksession',checksession)

module.exports=routerAuth