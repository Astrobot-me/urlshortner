import mongoose from "mongoose";


async function connectToMongo(connectionString){
    return mongoose.connect(connectionString)
}

export default connectToMongo