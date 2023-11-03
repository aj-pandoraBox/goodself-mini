import express from "express";
import User from "./routers/User.js"
import Post from "./routers/Post.js"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
export const app = express()

app.use(express.json({
    limit: '50mb'
}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 10000 * 1024 * 1024 },

}))

app.use("/api/v1/user", User)
app.use("/api/v1/post", Post)