//  INTERPRETÇÃO 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

/*
          resposta
{ nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Laís Petra', apelido: 'Laura' } 1 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
*/

//---------------------------//-----------------------//
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

// Amanda Rangel, Láis Petra, Letícia Chijo

//---------------------------//-----------------------//
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

// Mandi, Laura

//---------------------------//-----------------------//

//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
];

// item A

const doguinhoNomes = pets.map((item) => {
    return item.nome;
});



// item B

const doguinhoSalsicha = pets.filter((item) => {
    return item.raca === 'Salsicha';
});


//item c

const arrayPoodles = pets.filter((poodle) => {
    return poodle.raca === "Poodle";
});

const arrayPoodlesPromocao = arrayPoodles.map((racaPromo) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${racaPromo.nome}`
});

//---------------------------//-----------------------//

//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 },
]

// item A
const nomeItem = produtos.map((nome) => {
    return nome.nome;
});

// item B
const desconto = produtos.map((total) => {
    return {nome: total.nome, preco: total.preco * 0.95}
});


// item C

const arrayBebidas = produtos.filter((categoria) => {
    return categoria.categoria === 'Bebidas'
})



// item D

const itemYpe = produtos.filter((string) => {
    return string.nome.includes("Ypê");
})

// item e

const arryMensagem = itemYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`;
});
//---------------------------//-----------------------//

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const nomesABC = pokemons.map((nomesABC) => {
    return nomesABC.nome;
}).sort(); 


//---------------------------//-----------------------//

const tipos = pokemons.map((tipo) => {
    return tipo.tipo;
});

const arrayTipos = [...new Set(tipos)]

// outro jeito item b desafio 

const arrayFilter = tipos.filter((item, index) => {
    return tipos.indexOf(item) == index;
});









