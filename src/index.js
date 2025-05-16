import dotenv from "dotenv";
dotenv.config({
   path: `./env`
}
)
import {app} from "./app.js"
import connectDB from "./db/index.js";
connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
      console.log(`server is runing at port: ${process.env.PORT}`)
   })
})
.catch((error)=>{
   console.log("mongo db conection failed", error)
})















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
