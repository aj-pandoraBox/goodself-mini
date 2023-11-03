
import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            return res.status(401).json({ sucess: false, message: "not logged in" })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(401).json({ sucess: false, message: "not logged in" })

        }

        req._user = await User.findById(decode.id)
        next()

    } catch (err) {

    }
}