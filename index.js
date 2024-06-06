

const {writeFileSync, readFileSync} = require ("fs");

const prova = readFileSync('./cartella/prova.txt','utf8');
const ciao = readFileSync('./cartella/ciao.txt','utf8');

console.log(prova);

//se metto 'a' mette append, se do un path inesistent lo crea
writeFileSync('./cartella/prova.txt', 'prova ciaoooo', {flag: 'a'}); 
