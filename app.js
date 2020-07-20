const express = require('express');
const mongoose = require('mongoose')

require("dotenv/config");

const app = express();

const port = process.env.PORT || 3000; 

//add integration with mongoose and db management : CRUD.

app.get("/", (req, res) => res.send("Hello World number 2!"));

app.listen(port, () => console.log("listening at port " + port));