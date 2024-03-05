const express = require("express");
const router = require("./router/userrouter");
const server = require("./database/database");
const app = express();

app.use(express.json());

app.use(router)

server().then(() => {
    console.log("Database Conneted");
}).catch((err) => {
    console.log(err);
})


app.listen(2000, () => {
    console.log("Server Start");
});

console.log("Harsh");