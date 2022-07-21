import app from "./app"
import 'dotenv/config';


app.listen(process.env.PORT,()=>{
    console.log(`App is up and running on 4500`)
})