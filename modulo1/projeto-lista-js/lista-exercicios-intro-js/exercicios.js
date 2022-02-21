// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const heigth = Number(prompt("Digite a altura do retângulo:"));
  const width = Number(prompt("Digite a largura do retângulo:"));
  const area = width * heigth;

  console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const currentYear = Number(prompt("Qual o ano atual?"));
  const birthYear = Number(prompt("Qual o seu ano de nascimento?"));
  const age = currentYear - birthYear;

  console.log(age);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const name = prompt('Qual oseu nome?');
  const age = prompt('Qual sua idade?');
  const email = prompt('Qual o seu e-mail?');

  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const Color1 = prompt('digite sua uma cor');
  const Color2 = prompt('digite outra cor')
  const color3 = prompt('digite só mais uma cor')
  let userColors = [];

  userColors.push(Color1, Color2, color3);

  console.log(userColors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) { 
  // implemente sua lógica aqui
  const primeiroElemnto = array.shift(); 
  const ultimoElemento = array.pop(); 
  const primeroPraUltima = array.push(primeiroElemnto);
  const ultimoPraPrimeiro = array.unshift(ultimoElemento);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual seu ano atual?'));
  const anoNascimento = Number(prompt('Qual seu ano de nascimento?'));
  const emissaoRG = Number(prompt('Quando foi emitido seu RG?'));
  
  const idadeUser = anoAtual - anoNascimento;
  const renovacaoRG = anoAtual - emissaoRG;

  const condicao1 = idadeUser <= 20 && renovacaoRG % 5 === 0;
  const condicao2 = idadeUser > 20 && idadeUser <= 50  && renovacaoRG >=10;
  const condicao3 = idadeUser > 50 && renovacaoRG >= 15;
  
  console.log(condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicao1 = ano % 400 === 0;
  const condicao2 = ano % 4 === 0 && ano % 100 !== 0; 
 
  
  return condicao1 || condicao2;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt('voce tem 18 anos ou mais?');
  const escolaridae = prompt('você possui ensino médio completo? ');
  const disponibilidade =  prompt('Você possui disponibilidade exclusiva durante os horários do curso?');
  let respostas = [];
  respostas.push(idade.toLowerCase(), escolaridae.toLowerCase() , disponibilidade.toLowerCase());
 
  const res1 = respostas[0]; 
  const res2 = respostas[1]; 
  const res3 = respostas[2]; 
 const verificaRes = res1 === 'sim' && res2 === 'sim' && res3 === 'sim';
   
  console.log(verificaRes);
}