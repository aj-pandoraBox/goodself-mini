import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("connected to", connection.host)
    } catch (err) {
        console.log(err)
    }

}