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
// CONSOLE.LOG BOAS VINDAS
//console.log('Boas vindas ao jogo de Blackjack!');
// -------VARIAVEIS-------
// cartas do usuario 
// const usuarioCarta1 = comprarCarta();
// const usuarioCarta2 = comprarCarta();

// // cartas computador
// const computadorCarta1 = comprarCarta();
// const computadorCarta2 = comprarCarta();

// let ganhador = 0;
// //------OBJETOS---------
// const cartasDoUsuario = {
//    carta1: usuarioCarta1.texto,
//    carta2: usuarioCarta2.texto,
//    pontos: usuarioCarta1.valor + usuarioCarta2.valor
// };

// const cartasDoComputador = {
//    carta1: computadorCarta1.texto,
//    carta2: computadorCarta2.texto,
//    pontos: computadorCarta1.valor + computadorCarta2.valor
// };
// // ------FUNÇÕES------
// function imprimeCartas() {
//    console.log(`Usuário - cartas: ${cartasDoUsuario.carta1} ${cartasDoUsuario.carta2} - pontuação ${cartasDoUsuario.pontos}`);
//    console.log(`Computador - cartas: ${cartasDoComputador.carta1} ${cartasDoComputador.carta2} - pontuação ${cartasDoComputador.pontos}`);
// };
// function declaraGanhador(ganhador) {
//    if (cartasDoUsuario.pontos > cartasDoComputador.pontos && cartasDoUsuario.pontos <= 21) {
//       ganhador = console.log('O usuário ganhou!');
//    } else if (cartasDoComputador.pontos > cartasDoUsuario.pontos && cartasDoComputador.pontos <= 21) {
//       ganhador = console.log('O computador ganhou!');
//    } else {
//       ganhador = console.log('Empate!');
//    };
//    return ganhador
// };
// // ------IF ELSE CONFIRM-----
// if (confirm('Quer iniciar uma nova rodada?')) {
//    imprimeCartas();
//    declaraGanhador(ganhador);
//    console.log('Recarregue a pagina para uma nova rodada');
// } else {
//    console.log('O jogo acabou!');
//    console.log('Recarregue a pagina para uma nova rodada');
// };
