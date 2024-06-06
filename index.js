/* 

const {writeFileSync, readFileSync} = require ("fs");

const prova = readFileSync('./cartella/prova.txt','utf8');
const ciao = readFileSync('./cartella/ciao.txt','utf8');

console.log(prova);

//se metto 'a' mette append, se do un path inesistent lo crea
writeFileSync('./cartella/prova.txt', 'prova ciaoooo', {flag: 'a'});  */


const {writeFile, readFile} = require ("fs");
readFile('./cartella/prova.txt','utf8', (error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    const prova = result;
    console.log(prova);
    readFile('./cartella/ciao.txt','utf8', (error,result)=>{
        if(error){
            console.log(error);
            return;
        }
        const ciao = result;
        console.log(ciao);
        writeFile('./cartella/3file.txt','ciaooaaoaoaa oooo', (error,result)=>{
            if(error){
                console.log(error);
                return;
            }
            console.log(result);
        });
    });
});