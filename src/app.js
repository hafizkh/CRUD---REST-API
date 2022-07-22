import express from "express"
import "dotenv/config"
import productRoute from "./routes/productRoutes.js"

const app = express()
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use("/", productRoute)




export default app
