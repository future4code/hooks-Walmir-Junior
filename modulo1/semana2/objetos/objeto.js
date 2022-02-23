// -------------EXERCICIOS DE INTERPRETAÇÃO!! -------------------

//------------- EXERCICIOS 1 -------------------

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele;
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish;
console.log(filme.transmissoesHoje[2]) //{canal: "Globo", horario: "14h"};

//------------- EXERCICIOS 2 -------------------

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // {nome: "Juca", idade: 3, raca: "SRD"}
console.log(gato) // {nome: "Juba", idade: 3, raca: "SRD"} copia a estrutura só altera o nome. 
console.log(tartaruga) //  {nome: "Jubo", idade: 3, raca: "SRD"} tudo que é "a" vira "o".

//B--> a sintaxe dos três pontos é conhecida como spreed, copia a estrutura e o dados de um objeto e passa para outro

//------------- EXERCICIOS 3 -------------------

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //Irá imprimir --> false 
console.log(minhaFuncao(pessoa, "altura")) //Irá imprimir --> undefined

//B--> no primeiro console log o valor da propriedade backender é false retornado assim o mesmo, já a propriedade altura nao foi definida anteriormente como a backender sendo incerida logo após o console.log chama-la,ela foi atribuida ao objeto porém nem um valor foi dado a ela, então automaticamente o js conclui que o valor dela é undefined.

//------------- EXERCICIOS DE ESRITA -------------------

//------------- EXERCICIOS 1 -------------------

function imprimeApeliNomes(objeto){
    console.log(` Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
}; 

const pessoa = {
    nome: "walmir",
    apelidos: ["join", "junior", "mogli"]
     
};

imprimeApeliNomes(pessoa);

const pessoa2 = {
    ...pessoa,
    apelidos: ["a", "b", "c"]
};

imprimeApeliNomes(pessoa2);

------------- EXERCICIOS 2 -------------------

const obj1 = {
    nome:"Walmir",
    idade: "20",
    profissão:"dev full stack junior"
};

const obj2 = {
    nome:"junior",
    idade: "24",
    profissão:"dev full stack pleno"
};

function imprimeinfo (objeto){
  
   return [objeto.nome, 
    objeto.nome.length,
    objeto.idade,
    objeto.profissão,
    objeto.profissão.length
    ] 
}; 
 console.log(imprimeinfo(obj1));
 console.log(imprimeinfo(obj2));
 
//------------- EXERCICIOS 3 -------------------

const carrinho = [];

const fruta1 = {
    nome: "melão",
    diponivel: true
};

const fruta2 = {
    nome: "banana",
    diponivel: true
};

const fruta3 = {
    nome: "morango",
    diponivel: true
};

function colocaNoArray(objeto){
    carrinho.push(objeto);
};

colocaNoArray(fruta1);
colocaNoArray(fruta2);
colocaNoArray(fruta3);

console.log(carrinho);


