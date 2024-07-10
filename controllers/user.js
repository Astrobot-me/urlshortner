import User from "../models/user.js";
import { v4 as uuid } from 'uuid';
import { setUser } from "../services/auth.js";


export async function handleAddUser(req,res){
    const user_data = req.body
    console.log(user_data);
    try {
        const user = await User.create({
            fullname:user_data.fullname,
            email:user_data.email,
            password:user_data.password,
        })
        
        res.render("signup",{message:"Account Created Successfully", color:""})
    } catch (error) {
        console.log(error);
        res.render("signup",{message:"Failed! Try Again", color:""})
    }   
}

export async function handleUserLogin(req,res){
    const body = req.body
    const user = await User.findOne({email:body.email,password:body.password})
    
    if(!user){
        return res.render("login",{message:"Incorrect username or password"})
    }

    const sessionId = uuid()
    res.cookie("uid",sessionId)
    setUser(sessionId,user)
    return res.redirect("/frontend/home")
}
