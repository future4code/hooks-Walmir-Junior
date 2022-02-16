// INTERPRETAÇÃO !!
// EXERCICO 1

let array;
console.log('a. ', array); // a. undefined 

array = null;
console.log('b. ', array); //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log('c. ', array.length); //c. 11

let i = 0;
console.log('d. ', array[i]); // d. 3

array[i+1] = 19;
console.log('e. ', array); // e. [ 3, 19,  5,  6,  7, 8,  9, 10, 11, 12,13]

const valor = array[i+6];
console.log('f. ', valor);// f. 9

// EXERCICIO 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//"Subi num ônibus em Marrocos" RESPOSTA --> "SUBI NUM ÔNIBUS EM MIRROCOS"

//           EXERCICIO DE ESCRITA!!!

//EXERCICIO 1

const name = prompt("Qual o seu nome?");
const email = prompt("Qual o seu e-mail?");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo ${name}`)

//EXERCICIO 2 --> A, B e C 

const favoriteFoods = ["Mocotó", "Macarrão", "Omelete", "Frango a parmê", "Dobradinha"];

const userFavoriteFood = prompt("Informe sua cor favorita mano, por favor! Nunca te pedi nada!");

favoriteFoods[1] = userFavoriteFood; // letra C

console.log(favoriteFoods); // letra A
console.log(`Essas são as minhas comidas favoritas \n ${favoriteFoods[0]} \n ${favoriteFoods[1]} \n ${favoriteFoods[2]} \n ${favoriteFoods[3]} \n ${favoriteFoods[4]}`); // letra B 

//EXERCICIO 3

let listaDeTarefas = [];

const tarefa1 = prompt("fala uma tarefa ai cumpadi!");
const tarefa2 = prompt("fala ota uma tarefa irmão!");
const tarefa3 = prompt("fala mais uma mano!");
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(listaDeTarefas);

const removeTarefa = prompt("mano agr o indice do bagulho 0, 1 ou 2");
listaDeTarefas.splice(removeTarefa, 1);

console.log(listaDeTarefas);

//             DESAFIOS

const frase = prompt("Escreve frase");

const arrayFrase = frase.split(' ');
console.log(arrayFrase)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexAbacaxi = frutas.indexOf("Abacaxi");
console.log(`indice Abacaxi: ${indexAbacaxi} \n Tamanho do array: ${frutas.length} `);
