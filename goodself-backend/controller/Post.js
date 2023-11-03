import { Post } from "../models/Post.js";
import cloudinary from 'cloudinary';
import fs from "fs"
export const post = async (req, res) => {
    const { title, message } = req.body
    if (req.files?.imageURL == null) {
        return res.status(400).json({ success: false })
    }
    const { imageURL } = req.files
    try {

        const { secure_url, public_id } = await cloudinary.v2.uploader.upload(imageURL.tempFilePath)
        const result = await Post.create({
            title, message,
            userId: req._user._id,
            imageUrl: secure_url,
            public_id: public_id
        })

        fs.rmSync('./tmp', { recursive: true })

        res.json(result)
    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err })
    }
}

export const getAllPost = async (req, res) => {

    try {
        const result = await Post.find().sort({ createdAt: -1 }).populate('userId');
        res.json(result)
    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err })
    }
}