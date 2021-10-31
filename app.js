const express = require("express");
const app = express();
const port = 8000;
const bp = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/rt");
const todorouter = require("./helper/todo")



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://amangoswami19ty33:rajkumar@cluster0.os0y0.mongodb.net/anu?authSource=admin&replicaSet=atlas-137e32-shard-0&w=majority&readPreference=primary')
    .then((connect) => {
        console.log("connetion successful")
    }).catch((error) => {
        console.log("not connect")
    })

app.use("/user", router);
app.use("/todo",router)

app.listen(port, async () => {
    console.log("Hello Server")
});