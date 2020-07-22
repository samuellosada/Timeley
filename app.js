const express = require('express');
const mongoose = require('mongoose');

require("dotenv/config");

const app = express();

const port = process.env.PORT || 3000; 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB."));

app.get("/", (req, res) => res.send("Hello World number 2!"));

app.listen(port, () => console.log("listening at port " + port));

