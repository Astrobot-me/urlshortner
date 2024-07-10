import express from 'express';
import Link from '../models/link.js';


const staticRoute = express.Router()


staticRoute.route("/home").get(async (req,res)=>{

    if(!req.user) return res.redirect("/frontend/login")

    const data =  await Link.find({createdBy:req.user._id})
    // console.log(data);
    if(data.message === "Failed") return res.render("home")

    return res.render("home",{urls:data})
})

staticRoute.route("/signup").get(async (req,res)=>{
    
    return res.render("signup")
})

staticRoute.route("/login").get(async (req,res)=>{
    
    return res.render("login")
})



export default staticRoute