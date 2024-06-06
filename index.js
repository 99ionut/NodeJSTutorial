const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Benvenuto sul sito");
    }else if(req.url === "/ionut"){
        res.end("il profilo di ionut");
    } else {
        res.end(`<h1>errore</h1>`);
    }
})

server.listen(3000);

