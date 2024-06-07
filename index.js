const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('Risorsa About')
  })

app.all("*", (req, res)=>{
    res.send("risorsa non trovata");
});

app.listen(3000)