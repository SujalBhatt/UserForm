const express = require("express")
const app = express()
const connectDB = require("./config.js")
const router = require("./userRoute")
const cors = require("cors")


app.use(cors())
app.use(express.json())

app.get("/",(req, res) => {
    res.send("Hey User! Fill the Form")
})

app.use("/", router)

app.listen(8000, async () => {
    try {
        await connectDB()
        console.log("Server listening on port 8000")
    } catch(error) {
        console.log(error.message)
    }
})