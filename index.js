const express = require('express')
const app = express()
const {persone} = require('./persone');

app.use(express.json());

app.get("/api/persone", (req, res) =>{
    res.status(200).json({data:persone});
})

app.get("/api/persone/:id", (req, res) =>{
    const {id} = req.params;
    const persona = persone.find((persona=>persona.id===id))
    res.json(persona);
});

app.post("/api/persone", (req, res) =>{
    console.log(req.body);
    const persona = req.body;
    persone.push(persona);
    res.status(200).json({success:true, data:persone});
})

app.put("/api/persone/:id", (req, res) =>{
    const {id} = req.params;
    const persona = req.body;
    persone[Number(id)-1] = persona;
    res.status(200).json({success: true})
})

app.delete("/api/persone/:id", (req, res) =>{
    const {id} = req.params;
    const index =  persone.findIndex(persona => persona.id === id);
    persone.splice(index,1);
    res.status(200).json({success: true})
})


app.listen(3000);