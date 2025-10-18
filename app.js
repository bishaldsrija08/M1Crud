const express = require("express")
const { envConfig } = require("./config/envConfig")
envConfig()
const connectToDatabase = require("./database")
const app = express()

// Cors
const cors = require("cors")
app.use(cors(
    {
        origin: "*",
        optionsSuccessStatus: 200
    }
))

// Parse json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDatabase()
const blogRoutes = require("./routes/blogRoutes.js")

// Blog routes
app.use("/", blogRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the MERN MINI project."
    })
})














const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})