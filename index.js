const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('messaggio', (nome,anno)=>{
    console.log("sono partito, evento manda messaggio "+nome+" e "+anno);
})

customEmitter.on('messaggio', (nome)=>{
    console.log("evento, manda notifica "+nome);
})

customEmitter.on('messaggio', ()=>{
    console.log("evento vuoto");
})

customEmitter.emit("messaggio", "ionut", 2024);