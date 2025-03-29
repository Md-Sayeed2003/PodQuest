import express from 'express'
import User from '../model/user.model.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import authMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

//sign-up route

router.post("/sign-up", async (req,res)=>{
    try{

        const {username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message : "All fields are required"});
        };

        if(username.length < 5){
            return res.status(400).json({message : "Username must have 5 charcters"});
        }

        if(password.length < 6){
            return res.status(400).json({message : "Password must have 6 characters"});
        }

        //check user exists or not

        const existingEmail = await User.findOne({email : email});
        const existingUsername = await User.findOne({password : password});

        if(existingEmail || existingUsername){
            return res.status(400).json({message : "Username or Email already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            username : username,
            email : email,
            password : hashedPassword
        });

        await newUser.save();

        return res.status(200).json({message : "Account Created",newUser})

    }catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal Server Error"});
    }
});

router.post("/login" , async(req,res)=>{
    try {

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message : "All fields are required"});
        };

        if(email.length < 5){
            return res.status(400).json({message : "Username must have 5 characters"});
        }

        if(password.length < 6){
            return res.status(400).json({message : "Password must have 6 characters"});
        }


        const existingUser = await User.findOne({email : email});
        

        if(!existingUser ){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        //check password

        const isMatch = await bcrypt.compare(password,existingUser.password);

        if(!isMatch){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        //Generate JWT Token

        const token = jwt.sign(
            {id : existingUser._id,email : existingUser.email},
            process.env.JWT_SECRET, 
            {expiresIn : "30d"}
        );

        res.cookie("podcasterUserToken",token,{
            httpOnly : true,
            maxAge : 30 * 24 * 60 * 60 * 100,
            sameSite : "None",
            secure : process.env.NODE_ENV === "production"
        });

        return res.status(200).json({
            id : existingUser._id,
            username : existingUser.username,
            email : email,
            message : "User Logged In Successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

router.get("/logout" , async(req,res)=>{
    try {

        res.clearCookie("podcasterUserToken",{
            httpOnly : true
        })

        return res.status(200).json({message : "Logged out successfully"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

router.get("/check-cookie", async(req,res)=>{

    try {

        const token = req.cookies.podcasterUserToken;
        if(token){
            return res.status(200).json({message : true});
        }

        return res.status(200).json({message : false});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

// route to fetch user details

router.get("/user-details", authMiddleware, async(req,res)=>{
    try {

        const {email} = req.user;

        const existingUser = await User.findOne({email : email}).select("-password");

        // if(!existingUser){
        //     return res.status(404).json({message : "User not found"});
        // }

        return res.status(200).json({message : "Successfull",user : existingUser})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "Internal Server Error"});
    }
})

export default router;