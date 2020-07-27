const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const usersRoute = require('./routes/users');

require("dotenv/config");

const app = express();

app.use(express.json());
app.use('/users', usersRoute);

const port = process.env.PORT || 3000; 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open', () => console.log("Connected to TimeleyDB"))

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log("listening at port " + port));


