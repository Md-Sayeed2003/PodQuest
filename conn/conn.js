import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const conn = async()=>{
    try{

        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("MongoDB connected successfully")

    }catch(err){
        console.log(err);
    }
}


export default conn;