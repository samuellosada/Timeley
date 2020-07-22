const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

require("dotenv/config");

const app = express();

const port = process.env.PORT || 3000; 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB."));

const u = new User({
    firstName: 'Samuel',
    lastName: 'losada',
    email: "a@b.c",
    password: '1',
});

u.save((err) => console.log(err));

console.log(User.find({}));

app.get("/", (req, res) => res.send("Hello World number 2!"));

app.listen(port, () => console.log("listening at port " + port));

