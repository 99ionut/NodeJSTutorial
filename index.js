const express = require('express')
const app = express()
const {persone} = require('./persone');

app.get("/", (req, res) =>{
    res.send("<h1>homepage</h1>");
})


app.get("/persone", (req, res) =>{
    const nuovaPersona = persone.map((persona)=>{
        const {nome,cognome} = persona;
        return {nome, cognome}
    })
    res.json(nuovaPersona);
})

app.get("/persone/:id", (req, res)=>{
    console.log(req.params);
    const id = req.params.id;
    const persona = persone.find((persona)=> persona.id === id);

    if(!persona){
        return res.status(404).json({message: "non trovato"});
    }
    res.json(persona);
});

app.listen(3000);