import express from "express";
import { emailExist, login, logout, register, usernameExist } from "../controller/User.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router()

router.route("/register").post(register)
router.route("/logout").post(logout)
router.route("/login").post(login)
router.route("/emailcheck").post(emailExist)
router.route("/usernamecheck").post(usernameExist)

export default router