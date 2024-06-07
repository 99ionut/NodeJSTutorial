const {writeFileSync, readFileSync, createReadStream} = require('fs');

const stream = createReadStream("./filegrande.txt");

//file passato in chunk assestanti non un solo chunk come readFileSync
stream.on("data", (result)=>{
    console.log(result);
})