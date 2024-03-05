const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    }
})

const User = new mongoose.model("User", user)

module.exports = User