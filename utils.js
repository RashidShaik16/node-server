import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const database = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Succesfully connected MongoDB")
        })
        .catch((err) => {
            console.log("Failed to connect MongoDB")
            })
}

export default database