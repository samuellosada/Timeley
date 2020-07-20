const express = require('express');

const app = express();

const port = 3000; // fix this shit. 

//add integration with mongoose and db management : CRUD.

app.get("/", (req, res) => res.send("Hello World number 2!"));

app.listen(port, () => console.log("listening at port " + port));