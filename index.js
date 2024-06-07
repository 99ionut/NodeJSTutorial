const express = require('express')
const app = express()
const {persone} = require('./persone');

//middleware = funzione eseguita durante la richiesta req -> middleware -> res
const middlewareProva = require('./middlewareProva');
app.use(middlewareProva)
//per usarlo solo su alcuni percorsi (es tutto quello che viene dopo /persone app.use("/persone",middlewareProva)
//per usare piu middleware app.use([middlewareProva1, middlewareProva2 ecc...])

app.get("/", (req, res) =>{
    res.send("<h1>homepage</h1>");
})

//app.get("/about", middlewareProva, (req, res) =>{ oppure app.use(middlewareProva) per usarlo su tutte le funzioni
app.get("/about", (req, res) =>{
    res.send("<h1>about</h1>");
})

app.listen(3000);