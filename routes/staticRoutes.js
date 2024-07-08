import express from 'express';
import { handleGetalllinks } from '../controllers/link.js';
import Link from '../models/link.js';


const staticRoute = express.Router()


staticRoute.route("/home").get(async (req,res)=>{
    const data =  await Link.find({})
    console.log(data);
    if(data.message === "Failed") return res.render("home")

    return res.render("home",{urls:data})
})

export default staticRoute