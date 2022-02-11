/*//Exercício de interpretação de código.

/* 1 - Analise o programa abaixo e diga o que será impresso no console, 
SEM EXECUTAR o programa.*/

//let a = 10;
//let b = 10;

//console.log(b);

//b = 5; // A variável b passa a valer 5. 
//console.log(a, b);

/* Respposta: A saída do código é ===  10 10 5
Pois a variável b por ser declarada com LET pode te seu valor alterado.*/

/*let a = 10;
let b = 20;
c = a; // Variavel c recebe 10.
b = c; // Variavel b recebe 10.
a = b; // Variavel a recebe 10.

console.log(a, b, c);*/

/* Resposta: a saída do código é === 10 10 10 */

/* 3 - Analise o programa abaixo, entenda o que ele faz 
e sugira melhores nomes para as variáveis. */ 

// let workHours = prompt("Quantas horas você trabalha por dia?");
/*let p = prompt("Quantas horas você trabalha por dia?");
// let dailyReceived = prompt("Quanto você recebe por dia?");
let t = prompt("Quanto você recebe por dia?");
//alert(`Voce recebe ${workHours/dailyReceived} por hora`);
alert(`Voce recebe ${t/p} por hora`);*/
/* *************************     ************************* */
// Exercício de escrita de código.

/*let nome;
let idade;

console.log(typeof nome, typeof idade);
// Resposta D === Como não definimos um valor para as variaveis ele retornou undefined.

nome = prompt("Qual o seu nome?");
idade = prompt("Qual sua idade?");

console.log(typeof nome, typeof idade);
//Resposta F === Tudo que o prompt recebe ele entende com string (texto).

console.log(`Olá ${nome}, você tem ${idade} anos`);

// exerciico 2

let pergunta1 = "vai desistir da labenu?";
let pergunta2 = "vai praticar todo dia?";
let pergunta3 = "vai esperar a oportunidade cair do céu?";

let RespostaPergunta1 = "não";
let RespostaPergunta2 = "sim";
let RespostaPergunta3 = "não";

console.log(pergunta1);
console.log(RespostaPergunta1);
console.log(pergunta2);
console.log(RespostaPergunta2);
console.log(pergunta3);
console.log(RespostaPergunta3);

// exercicio 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let aValorAntigo = 10;
a = b;
b = aValorAntigo;


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10*/

//DESAFIOS

let primeiroNum = Number(prompt("Informe o primeiro número."));
let segundoNum = Number(prompt("Informe o segundo número."));

console.log(`o primeiro número somado ao segundo número resulta em: ${primeiroNum + segundoNum}`);
console.log(`o primeiro número multiplicado ao segundo número resulta em: ${primeiroNum * segundoNum}`);