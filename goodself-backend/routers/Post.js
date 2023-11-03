import express from "express";
import { getAllPost, post } from "../controller/Post.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router()

router.route("/add").post(isAuth, post)
router.route("/all").get(isAuth, getAllPost)


export default router