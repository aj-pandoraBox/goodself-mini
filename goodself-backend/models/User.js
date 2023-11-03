import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    DOB: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be 8 characters long"]
    },

    avatar: {
        public_id: String,
        url: String
    }

})

userSchema.methods.getJWTToken = async function () {
    const jwtToken = await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: 30 * 24 * 60 * 60 * 1000
    })
    return jwtToken
}

userSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
    next()
})

export const User = mongoose.model("User", userSchema)