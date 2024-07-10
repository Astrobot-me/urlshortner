import jwt from 'jsonwebtoken';
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
    if(!object) return jwt.sign(object,signKey)
}

export function validateJwt(token){
    
}