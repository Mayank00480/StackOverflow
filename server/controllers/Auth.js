import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/Auth.js'


export const signup = async(req,res) =>{
 const {name , email , password} = req.body ;
 try{
    const existinguser = await users.findOne({email})
    if(existinguser){
        console.log(existinguser)
       return res.status(404).json({message : "User already exist"})
    }
    const hashedPassword = await bcrypt.hash(password,12)
    const newuser = await users.create({name , email , password : hashedPassword})
    const token = jwt.sign({email : newuser.email, id : newuser._id}, "test" , {expiresIn : '1h'});
    res.status(200).json({result : newuser , token})
 }
 
 catch(error){
    res.status(501).send("Something went wrong")
 }
}
export const login = async(req,res) =>{
    const {email , password} = req.body
    try{
        const existinguser = await users.findOne({email})
        if(!existinguser){
            req.status(404).json({message : "User don't exist"})
        }
        const isPasswordCorrect = await bcrypt.compare(password , existinguser.password)
        if(!isPasswordCorrect)
        {
            res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({email : newuser.email, id : newuser._id}, "test" , {expiresIn : '1h'});
        res.status(200).json({result : newuser , token})
}
catch(error){
    req.status(500).json("Something went wrong")
 }

}