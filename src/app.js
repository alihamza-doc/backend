import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
app.use(cors({
      origin: process.env.CORS_ORIGIN,
      credentials:true
    }))
app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true,limit:"10kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import
import userRouter from "./routes/user.routers.js"

//router declaration
app.use("/api/v1/users" , userRouter)

export {app}