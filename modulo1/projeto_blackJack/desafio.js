/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const jogador = [];
const banca = [];

function sorteiaCartas() {
   // sortear as cartas dos jogadores
   let cartasDiferentes = false;
   while (!cartasDiferentes) {
      jogador.push(comprarCarta());
      jogador.push(comprarCarta());
      banca.push(comprarCarta());
      banca.push(comprarCarta());
      if ((jogador[0].valor === 11 && jogador[1].valor === 11) || (banca[0].valor === 11 && banca[1].valor === 11)) {
         jogador = [];
         banca = [];
      } else {
         cartasDiferentes = true;
      };
   };
};

let compra;

function comprar() {
   
};


if (confirm('Boas vindas ao jogo de Black Jack! \n Gostaria de iniciciar uma nova rodada?')) {
   // sortear as cartas dos jogadores
   sorteiaCartas();

} else {
   alert('Game Over');
};



