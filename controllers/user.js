import User from "../models/user.js";


export async function handleAddUser(req,res){
    const user_data = req.body
    console.log(user_data);
    try {
        const user = await User.create({
            fullname:user_data.fullname,
            email:user_data.email,
            password:user_data.password
        })
        
        res.render("signup",{message:"Account Created Successfully", color:""})
    } catch (error) {
        console.log(error);
        res.render("signup",{message:"Failed! Try Again", color:""})
    }   
}

