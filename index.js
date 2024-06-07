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

//questi parametri devono essere gestiti
/* app.get("/persone/:id", (req, res)=>{
    console.log(req.params);
    const id = req.params.id;
    const persona = persone.find((persona)=> persona.id === id);

    if(!persona){
        return res.status(404).json({message: "non trovato"});
    }
    res.json(persona);
}); */

//questi non sono obbligatori
//filtra per iniziale
//http://localhost:3000/persone/search?query=a&limit=1
app.get("/persone/search", (req, res)=>{
    console.log(req.query);
    const {query, limit} = req.query;
    let personeFiltrate = [...persone];
    if(query){
        personeFiltrate = personeFiltrate.filter((persona)=>{
            return persona.nome.startsWith(query);
        })
    }

    if(limit){
        personeFiltrate = personeFiltrate.slice(0,Number(limit));
    }

    if(personeFiltrate.length < 1){
        return res.status(200).json({success:true, messaggio:"nessun dato"})
    }

    res.status(200).json(personeFiltrate);
});

app.listen(3000);