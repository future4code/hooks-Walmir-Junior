const colors = require('colors');

const operation =  process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if(!num1 || !num2 || !operation){
    console.log("esperava mais parametros" .red)
}else {

    switch(operation){
        case "soma":
            return console.log(`resultado da soma é  ${num1 + num2}` .blue)
    
        case "mult":
            return console.log(`resultado da soma é  ${num1 + num2}` .blue)
    
        case "div":
            return console.log(`resultado da soma é  ${num1 + num2}` .blue)
    
        case "sub":
            return console.log("resultado da soma é",  num1 - num2 .blue)
    
        case "expo":
            return console.log(`resultado da soma é  ${num1 + num2}` .blue)
        }
}
