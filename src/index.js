import dotenv from "dotenv";


import connectDB from "./db/index.js";
connectDB()
dotenv.config({
   path: `./env`
}
)
/*
import express from "express"
const app = express()

( async ()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`) 
     app.on("error", (error)=>{
      console.log("ERROR:", error)
      throw error
     })
    }

     catch(error){
        console.error("ERROR", error)
        throw err
     }

})()
     */
