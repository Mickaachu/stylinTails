import User from "../../models/User.js"
import jwt from "jsonwebtoken"
import env from "dotenv"
import bcrypt from "bcrypt"

env.config()

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body
        if(!name || !email || !password) return res.json({error: "Please fill all the fields"})


        if(await User.findOne({email})) { //if user already exist
            res.json({error: "User already exist"})
        }

        if(password.length < 6) return res.json({error: "Password must be at least 6 characters"})

        else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = new User({name, email, password: hashedPassword})
            await user.save()
            res.json({message: "User created successfully", user: {username: user.name, _id: user.id}})


        }
    }catch(error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        
        if(!email || !password) return res.json({error: "Please fill all the fields"})

        //check if user exist
        const user = await User.findOne({email})
        if(!user) return res.json({error: "User does not exist"})
        //check if password is correct

        const passIsValid = await bcrypt.compare(password, user.password)

        if(!passIsValid) return res.json({error: "Password is incorrect"})

        const token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: "2h"})
        
        res.json({success: "Login successful", token, user: {username: user.name, _id: user.id}})

    }catch(error) {

        
        console.log(error)
    }
}


export {
    registerUser, loginUser, 
}