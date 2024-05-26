const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my first NodeJS application!");
})

app.listen(4000, () => {
    console.log ("Conneting to the 4000 port");
})