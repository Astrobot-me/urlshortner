import express, { Router } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path'

import connectToMongo from './database.js';
import UrlRoute from "./routes/link.js"
import staticRoute from './routes/staticRoutes.js';
import userRoute from './routes/user.js';
import { allowLoggedInUserOnly } from './middleware/auth.js';
import cookieParser from 'cookie-parser'
import { handleGetredirect } from './controllers/link.js';

dotenv.config({
    path:"./.env"
})

const app = express()



const DB_CON_STRING = process.env.DB_CON_STRING
const PORT = process.env.PORT
// console.log(DB_CON_STRING);

connectToMongo(DB_CON_STRING).then((connection)=>{
    // console.log(connection);
    console.log(`Connected to MongoDB : ${connection.connections[0].host} `);

    app.listen(PORT,()=>{
        console.log(`App is Running at : https://localhost:${PORT}`);
    })
})

app.use(express.json())     
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(cookieParser())
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


app.use(morgan('dev'))

app.use("/frontend",staticRoute)
app.use("/link",allowLoggedInUserOnly,UrlRoute)
app.use("/user",userRoute)

app.route("/:id").get(handleGetredirect)