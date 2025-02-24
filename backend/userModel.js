const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
   },

    description: {
        type: String,
    },

    price: {
        type: Number,
    },

    quantity: {
        type: Number,
    }

})


module.exports = mongoose.model("User", userSchema)