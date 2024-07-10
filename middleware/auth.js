import { getUser } from "../services/auth.js"

export async function allowLoggedInUserOnly(req,res,next){

    // console.log("Cookie",req.cookies);
    const cookie_uidVal = req.cookies.uid
    
    if (!cookie_uidVal) {
       return res.redirect("/frontend/login")
    }

    const user = getUser(cookie_uidVal)
    // console.log("User",user);

    if (!user) {
        return res.redirect("/frontend/login")
    }

    req.user = user

    next()
}   

export async function checkAuth(req,res,next){
    const cookie_uidVal = req.cookies.uid
    const user = getUser(cookie_uidVal)
    
    req.user = user

    next()
}