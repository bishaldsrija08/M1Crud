const express = require("express")
const { envConfig } = require("./config/envConfig")
const connectToDatabase = require("./database")
envConfig()
const app = express()
connectToDatabase()


app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Welcome to the MERN MINI project."
    })
})













const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})