import express from 'express'
import {registerController,loginController} from '../controller/authController.js'

// router object 
const router = express.Router()

//routing
//REFISTER || METHOD POST
router.post('/register', registerController)

//login || post
router.post('/login', loginController)

export default router