import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})
const signKey = process.env.JWT_SIGNKEY

const sessionIdToUserMap = new Map();


export function setUser(id,user){ 
    sessionIdToUserMap.set(id,user)
    // console.log(sessionIdToUserMap);
}

export function getUser(id){
    // console.log(sessionIdToUserMap);
    return sessionIdToUserMap.get(id)
}   

export function assignJwt(object){
    if(!object) return null
    const token =  jwt.sign(object,signKey)
    // console.log(token);
    return token
}

export function validateJwt(token){
    if(!token) return null
    return jwt.verify(token,signKey) // returns boolean
}