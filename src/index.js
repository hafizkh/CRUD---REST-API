import app from "./app.js"
import mongoose from "mongoose";
import "dotenv/config"


mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.lpq8g.mongodb.net/Restdb?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(process.env.PORT, ()=>
        console.log(`Server is up and running on ${process.env.PORT}`)
    )
    
})
.catch((e)=>{
    console.log('Server Error',e);
    process.exit(1)
})
