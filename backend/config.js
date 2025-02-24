const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://vimlabhatt97:KVSs75@cluster0.q8t0m.mongodb.net/UserForm")
        console.log("Connected to mongodb")
    } catch (error){
        console.log(error.message)
    }
}
module.exports = connectDB