import express from "express"
import cors from "cors"
import dotenv from "dotenv"; 
import userRoute from "./routes/userRoute.js";
import connectDB from "./config/database.js";
import adminRoute from "./routes/adminRoute.js";


const app = express()

const PORT = process.env.PORT || 5000;

dotenv.config({});
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Running")
})

app.use("/api/user",userRoute); 
app.use("/api/admin",adminRoute); 

app.listen(PORT,()=>{
    connectDB()
    console.log(`listning on port ${PORT}`)
})