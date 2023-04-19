import express from'express'
import {login,signup} from '../controllers/Auth.js'
const userRoute = express.Router();
userRoute.post('/login' , login)
userRoute.post('/signup', signup)
export default userRoute