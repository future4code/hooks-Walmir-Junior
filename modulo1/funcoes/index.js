//              INTERPRETAÇÃO!!!
//********************     **********************************************
/*function minhaFuncao(variavel) {
    return variavel * 5;
};

console.log(minhaFuncao(2)); // SAIDA 10;
console.log(minhaFuncao(10)); // SAIDA 50;

B --> NADA SÓ NAO IMPRIMIRAIA O RESULTADO NO CONSOLE, NAO IRIMOS ENXERGAR A SAIDA!
*/
//***********************************        ************************************
//          EXERCICIO 2
/*
let textoDoUsuario = prompt("Insira um texto");

 outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

 resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

A --> A FUNÇÃO COLETA UM TEXTO DO USUARIO E O CONVERTE TODO PARA LETRAS MINUSCULA E FAZ UMA VERIFICAÇÃO SE NO TEXTO A STRING/ELMENTO/PALAVRA "CENOURA";

B --> I- TRUE II-TRUE III-TRUE
*/

//                          ESCRITA 
// ************************         *******************************

// function imprimeInfo() {
//     console.log("Eu sou Walmir, tenho 20 anos, moro no Rio de Janeiro e sou estudante.");
// };


// function imprimeInfo2(nome1, idade, estado, ocupação) {
//     nome1 = 'walmir';
//     idade = 20;
//     estado = 'rio de janeiro';
//     ocupação = 'estudante';
//     console.log(`Eu sou ${nome1}, tenho ${idade} anos, moro em ${estado} e sou ${ocupação}.`);
// };

// imprimeInfo2('walmir', 20, 'rio de janeiro', 'estudante');

//          EXERCICIO 2
//**********           ********************

// A
function soma(num1, num2){
    
    return num1 + num2;
};

//B
function comparar(num1, num2){
    
    
    return num1 >= num2;
};

//C 
function verificaSeEPar(num){
    return num % 2 === 0;

};

//D
function tamanhoString(string){

    console.log( string.toUpperCase(), string.length );
}

//              EXERCICIO 3
//**************          **************

const primeiroNum = Number(prompt('digite um numero'));
const segundoNum = Number(prompt('digite um numero'));

function soma(num1, num2){
    console.log('soma', num1 + num2);
}

function sub(num1,num2){
    console.log('sub', num1 - num2);
}

function mult(num1,num2){
    console.log('mult', num1 * num2);
}

function div( num1,num2){
    console.log( 'div', num1 / num2);
}

soma(primeiroNum, segundoNum );
sub(primeiroNum, segundoNum);
mult(primeiroNum, segundoNum);
div(primeiroNum, segundoNum);


