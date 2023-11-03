import { app } from "./app.js";
import { config } from "dotenv"
import { connectToDatabase } from "./config/database.js";
import cors from "cors"
import cloudinary from 'cloudinary';
app.use(cors())

config({
    path: "./config/config.env"
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

connectToDatabase()

app.listen(process.env.PORT, () => {
    console.log("server is running on port ", process.env.PORT)
})

app.get("/", (req, res) => {
    res.send("welcome to goodself, made by ajay mandani")
})
