import express from 'express';
import Link from '../models/link.js';
import { nanoid } from 'nanoid';

export async function handleGetalllinks(req,res){

    try {
        const linkdata = await Link.find()
        return res.json({message:"Success",data:linkdata})
    } catch (error) {
        
        return res.json({message:"Failed",data:error})
    }
    

}


export async function handleGeneratelink(req,res){
    
    const uri = req.body
    const shortid = nanoid(8)

    if(!uri) return res.render("home",{status:400,message:"Bad Request: Url Not Provided"})

    try {
        const link = await Link.create({
            urliId:shortid,
            redirectUrl:uri.link,
            visitHistory:new Date(),
            clickCount:0,
            createdBy: req.user._id,
        })


        const data =  await Link.find({createdBy:req.user._id})
        // console.log(data);
        if(!data) return res.render("home",{status:200,message:`Link: https://localhost:9000/${shortid}`})

        return res.render("home",{status:200,message:`Link: https://localhost:9000/${shortid}`,urls:data})

        // return res.json({message:"Success",shortid:shortid,db_id:link._id})
    } catch (error) {
        
        return res.json({message:"Failed",data:error})
    }
    

}

export async function handleGetredirect(req,res){
    // console.log("Triggered");
    const id = req.params.id
    try {
        const url = await Link.find({urliId:id}) //array
        // return res.json(url)
        if (url.length === 0) {
            return res.status(400).json({message:"Bad Request: Link Not found"})
        } else {
            let updatedCount = Number(url[0].clickCount)
            const updateDoc = await Link.findByIdAndUpdate(url[0]._id,{clickCount:++updatedCount, $push:{visitHistory:{timestamps:Date.now()}} },{returnDocument:'after'})
            // console.log(updateDoc);

            res.redirect(url[0].redirectUrl)
        } 
    } catch (error) {
        return res.json({message:"Failed",data:error})
    }
}