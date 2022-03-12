// EXERCICIOS DE INTERPRETAÇÃO

// EX 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
// console.log(valor)

 //RESPOSTA : O codigo está incremmentando a varialvel i enquanto ela for menor que 5, e atribuindo esse valor na variavel valor. Será impresso o resultado da soma de 1+2+3+4 que é 10!

// EX 2
//Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//O que vai ser impresso no console?
 //Será imperesso os numeros maiores que 18, no caso 19 21 23....30

// Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// acho que não, teria que fazer o for completão 

// EX 3
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// resposta 4 linhas sendo a primeira com 1 "*" e crescendo para ultima que fica com 4 "*"! 
/* 
assim:
*
**
***
***
*/

// EXERCICIOS DE ESCRITA

// EX 1
const pets = [];
let bichos = Number(prompt("Quantos pets vc tem?"));
let nomeBichos;

if (bichos === 0 ){
    console.log("que pena vc pode adotar!");
}else{
    for (let i = 0; i < bichos; i++){
        nomeBichos = prompt("digite os nomes");
        pets.push(nomeBichos);
    }
}

console.log(pets);



// EX 2
const arrOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function mexeNoArray(){
    // imprimer cada item
    for (let i = 0; i < arrOriginal.length; i++){
        console.log('item a');
        console.log(arrOriginal[i]);
    };

    // cada item / por 10
    for (let i = 0; i < arrOriginal.length; i++){
        const resultado = arrOriginal[i] / 10;
        console.log('item b');
        console.log(resultado);
    };

    // item c 
    for (let i = 0; i < arrOriginal.length; i++){
        let arrayPares = [];
        if (arrOriginal[i] % 2 === 0 ){
            arrayPares.push(arrOriginal[i]);
            console.log(arrayPares);
        }
        
    };

    for (let i = 0; i < arrOriginal.length; i++){
        console.log(`O elemento do index é ${arrOriginal[i]}`)
    }



}
mexeNoArray();


// EX 3