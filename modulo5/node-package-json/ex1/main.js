/* UTILIZAMOS A LINHA DE CODIGO PROCESS.ARGV[2]*/

const colors = require('colors');

const userName = process.argv[2];
const age = Number(process.argv[3]);

if(!userName || !age){
    console.log("esperava 2 parmetros só recebi 1" .bgBlack.red)
}else{

    console.log(`Olá, ${userName}, você tem ${age} anos. Em 7 anos você terá ${age + 7}`.bgBlack.green)
}