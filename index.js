import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./utils.js"

dotenv.config()
const app = express()
const port = dotenv.PORT || 3000



app.use(cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// connect to database
database()
app.listen(port, () => {
    console.log("Server is Listening at port 3000")
})

app.get("/", (req, res) => {
    res.send("Request received at Home pages")
})


app.get("/about", (req, res) => {
    res.send(`<h1>Page developed by Rashid</h1>`)
})


app.get("/contact", (req, res) => {
    res.send(`<h1>Contact us at 8019734781</h1>`)
})

