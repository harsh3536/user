const mongoose = require("mongoose");

async function server() {
    await mongoose.connect("mongodb://localhost:27017/test")
}

module.exports = server;
server();