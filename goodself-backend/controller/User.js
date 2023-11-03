import { User } from "../models/User.js";

export const register = async (req, res) => {
    const { firstName, lastName, DOB, country, city, password, role, email, username } = req.body


    try {

        const userFind = await User.findOne({ $or: [{ email }, { username }] })
        if (userFind) {
            res.status(401).send({ success: false, message: "already exist email or username" })
            return
        }

        const user = await User.create({ firstName, lastName, DOB, country, city, password, role, email, username })

        const tokener = await user.getJWTToken()
        res.cookie("token", tokener, {
            httpOnly: true,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }).send({ success: true, userId: user._id })
    } catch (err) {
        res.send({ success: false, message: err })
    }

}



export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(401).send({ success: false, message: "please enter all the fields" })
    }

    try {

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).send({ success: false, message: "username or password does not exist" })

        }

        const isMatch = await user.comparePasswords(password)
        if (!isMatch) {
            return res.status(401).send({ success: false, message: "username or password does not exist" })

        }

        const tokener = await user.getJWTToken()
        res.cookie("token", tokener, {
            httpOnly: true,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }).send({ success: true, userId: user._id, message: "loggedInSuccess" })


    } catch (err) {
        res.send({ success: false, message: err })
    }

}




export const logout = async (req, res) => {
    try {

        res.cookie("token", null, { expires: new Date(Date.now()) }).json({ success: true, message: "logged Out" })
    } catch (err) {
        res.send({ success: false, message: err })
    }

}

export const usernameExist = async (req, res) => {
    const { username } = req.body
    try {
        const check = await User.findOne({ username })

        if (!check) {
            return res.status(200).json({ success: true, message: "go ahead" })
        } else {
            return res.status(400).json({ success: false, message: "username arealdy exists" })

        }

    } catch (err) {
        res.send({ success: false, message: err })

    }
}

export const emailExist = async (req, res) => {
    const { email } = req.body
    try {
        const check = await User.findOne({ email })

        if (!check) {
            return res.status(200).json({ success: true, message: "go ahead" })
        } else {
            return res.status(400).json({ success: false, message: "email arealdy exists" })

        }

    } catch (err) {
        res.send({ success: false, message: err })

    }
}
