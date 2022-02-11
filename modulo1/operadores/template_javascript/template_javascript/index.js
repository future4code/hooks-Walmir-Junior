//  EXERCICIOS DE INTERPRETAÇÃO


/*1.Leia o código abaixo. Indique todas as mensagens 
impressas no console, SEM EXECUTAR o programa.*/

// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2; //false

// let resultado = bool1 && bool2
// console.log("a. ", resultado); // a. false 

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado); // b. false

// resultado = !resultado && (bool1 || bool2); // tue 
// console.log("c. ", resultado); // c. true

// console.log("d. ", typeof resultado); // boolean

/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? */

// let primeiroNumero = prompt("Digite um numero!");
// let segundoNumero = prompt("Digite outro numero!");

// const soma = primeiroNumero + segundoNumero;

// console.log(soma); /* O prompt recebe o valor das variaveis como string. ao invés da soma, há a cocatenação ex: "5" + "5" === "55"*/

/*3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.*/

// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma); //ao converter os valores para o tipo number a soma ocorre tranquilamente.

// EXERCICIOS DE ESCRITA

// EXERCICIO 1;

// const ageUser = Number(prompt("Qual sua idade?"));
// const ageBestFriend = Number(prompt("Qual a idade do seu mió amigo(a)?"));

// const whoIsOlder = ageUser > ageBestFriend;
// const ageDifference = ageUser - ageBestFriend;

// console.log(`Sua idade é maior do que a do seu melhor amigo? ${whoIsOlder}, a diferença é ${ageDifference}`);

// EXERCICIO 2

// const pairNumber = Number(prompt("Digite um número par!"));
// const restOfDivision = pairNumber % 2;

// console.log(`O resto da divisão é ${restOfDivision}`);
// se o número é par sempre será divisivel por 2 e o resto de divisão será sempre zero. Se o numero for !== de par o resto deixará de ser 0

// EXERCICIO 3

// const ageInYears = Number(prompt("Qual é sua idade em anos?"));
// const ageInMonths = ageInYears * 12;
// const ageInDays = ageInYears * 365;
// const ageInHours = ageInYears * 8760;

// console.log(`Você têm ${ageInMonths} meses.`);
// console.log(`Você têm ${ageInDays} dias.`);
// console.log(`Você têm ${ageInHours} horas.`);

//EXERCICIO 4

// const firstNumber = Number(prompt("Informe um número:"));
// const secondNumber = Number(prompt("Informe outro número"));

// const biggerOrSmaller = firstNumber > secondNumber;
// console.log(`${firstNumber} é maior que o ${secondNumber}? ${biggerOrSmaller}`);

// const equalOrNo = firstNumber === secondNumber;
// console.log(`${firstNumber} é igual a ${secondNumber}? ${equalOrNo}`);

// const firstNumberDivibleOrNo = (firstNumber % secondNumber) === 0;
// console.log(`${firstNumber} é divisivel por ${secondNumber}? ${firstNumberDivibleOrNo}`);

// const secondNumberDivisibleOrNo = (secondNumber % firstNumber) === 0;
// console.log(`${secondNumber} é divisivel por ${firstNumber}? ${secondNumberDivisibleOrNo}`);

// DESAFIO

// desafio 1.a

//os nomes da variaveis estao pessimos kkkkkk
// let f = 77;
// let k = (f - 32) * (5/9) + 273.15;

// console.log (`${f}°F em kelvin é ${k}°k `);

//1.b

// let c = 80;
// let cf = (c * (9/5)) + 32;

// console.log(`${c}°c em F é ${cf}`);

//1.c 
// c = 30
// cf = (c * (9/5)) + 32;
// k = (cf - 32) * (5/9) + 273.15;

// console.log (`${c}°C é igual a ${cf}°F e a ${k}°K`);

//1.d

// c = Number(prompt("informe uma escala em °C:"));
// cf = (c * (9/5)) + 32;
// k = (cf - 32) * (5/9) + 273.15;

// console.log (`${c}°C é igual a ${cf}°F e a ${k}°K`);

// ia fazer o resto dos disafios mas to esgotado kkkkkvou deixar pra dps!!!

// DESAFIO 2
//2.a
// const custoKWh = 0.05;

// const consumoCasa = 280;

// console.log(`o consumo da residêcia é ${custoKWh * consumoCasa}`)

// 2.b

// const custoKWh = 0.05;

// const consumoCasa = 280;

// console.log(`o consumo da residêcia é ${custoKWh * consumoCasa} com o descnto de ${(custoKWh * consumoCasa) * 0.15}`);

// DESAFIO 3

const massaLB = 20;

console.log(`${massaLB}lb é equivalente a ${massaLB / 2.205}kg`);

const massaOZ = 10.5;

console.log(`${massaOZ} é equivalnete a ${massaOZ / 35,274}kg`);

const comprimentoMi = 100;

console.log(`${comprimentoMi}mi equivalem a ${comprimentoMi * 1609}m`);

const comprimentoPe = 50;

console.log(`${comprimentoPe}ft equivalem a ${comprimentoMi / 3.281}m `);

//parei o desafio por aq to esgotado !!





