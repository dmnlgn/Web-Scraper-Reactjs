const express = require('express');
const app = express();
const axios = require('axios');

// Require the needed functions
const { sendResponse } = require('./helpers');
const getPokemon = require('./scrapper');



const PORT = process.env.PORT || 8080;

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

// app.get("/pokemon", (req, res) => {
//   console.log("Connected to React");
// });
app.post('/pokemon', (req, res) => {
  console.log(req.body);
  res.send('this is the server response');
});
