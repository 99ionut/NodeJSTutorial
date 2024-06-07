const express = require('express')
const app = express()
const {persone} = require('./persone');

app.get("/", (req, res) =>{
    res.send("<h1>homepage</h1>");
})

app.post("/", (req, res) =>{
    res.send("<h1>post homepage</h1>");
})

app.put("/", (req, res) =>{
    res.send("<h1>put homepage</h1>");
})

app.delete("/", (req, res) =>{
    res.send("<h1>delete homepage</h1>");
})

app.get("/json", (req, res) =>{
    res.json(persone);
})

app.get("/area", (req, res) =>{
    res.send(req.body);
})

app.listen(3000);