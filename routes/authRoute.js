import express from 'express'
import {registerController,loginController, testController} from '../controller/authController.js'
import { requireSignIn } from '../middlewares/authMiddleware.js'

// router object 
const router = express.Router()

//routing
//REFISTER || METHOD POST
router.post('/register', registerController)

//login || post
router.post('/login', loginController)

//test routes
router.get('/test',requireSignIn, testController)

export default router