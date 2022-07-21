import express from "express";
import mongoose from "mongoose";
import 'dotenv';


export const app = express()
app.use(express.json())

app.set("port", 4500)
const port = app.get("port")

app.listen(port, ()=>{
    console.log(`App is up and running on ${port}`);
})




