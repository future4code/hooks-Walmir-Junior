// ------------ EXERCICIIOS DE INTREPRETAÇÃO -------------
// ------------ EXERCICIIOS 1 -------------
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
a) Explique o que o código faz. Qual o teste que ele realiza? 
    O código verifica se um número é par. Ele faz um teste lógico para ver se o número é divisivel por 2, recebendo o resto da divisão.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Para números pares.
c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Para números ímpares.
*/


// ------------ EXERCICIIOS 2 -------------
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
a) Para que serve o código acima?
    Para mostrar o perço do produto (fruta) para os usuarios.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
    Seria impresso ---> O preço da fruta maçã é R$ 3.25
    
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        
        Seria impresso ---> O preço da fruta null é R$ 5
    */
// ------------ EXERCICIIOS 3 -------------

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*
a) O que a primeira linha está fazendo?
    Coletando uma informação do usuário
    se for a primera linha do if, ele está comparando um número para ver se é maior que 0

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    no caso do 10 (IGUINORANDO O CONSOLE.LOG(MENSAGEM)) seria impresso  ---> Esse número passou no teste
                                        
    no caso do -10 (IGUINORANDO O CONSOLE.LOG(MENSAGEM)) seria impresso-->                              (isso mesmo nada).
 
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo
    Sim haveria um erro pois a variavel mensagem só existe no ecopo do if então o "console.log(mensagem)" iria dar erro. pois mensagem não está definida globalmente e ocomando console.log está fora do bloco/escopo do if.

*/

// ------------ EXERCICIIOS DE ESCRITA -------------


// ------------ EXERCICIIOS 1 -------------
/*
Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/
const userAge = Number(prompt('Informe sua idade'));

if (userAge >= 18){
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
}

// ------------ EXERCICIIOS 2 -------------
/*
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

//const turno = prompt('Qual o seu turno? digite M (matutino), V (Vespertino) ou N (Noturno).');

if (turno.toLowerCase() === 'm'){
    console.log('Bom Dia!');
} else if(turno.toLowerCase() === 'v'){
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!')
}

// ------------ EXERCICIIOS 3 -------------
/*
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/

switch (turno.toLowerCase()) {
    case 'm':
        console.log('Bom Dia!');
        break;
    case 'v':
        console.log('Boa Tarde!');
        break;
    default:
        console.log('Boa noite!');    

}
// ------------ EXERCICIIOS 4 -------------
/*
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

const genero = prompt('Qual gênero do filme?');
const precoIngresso = Number(prompt('Qual o valor do ingresso?'));

if (genero.toLowerCase() === 'fantasia' && precoIngresso < 15){
    console.log("Bom filme!");
}else{
    console.log('escolha outro filme')
}

//--------- DESAFIOS --------

/*
Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
*/

if (genero.toLowerCase() === 'fantasia' && precoIngresso < 15){
    const lanche = prompt('qual lanche você vai querer?')
    console.log("Bom filme!");
    console.log("aproveite seu " , lanche);
}else{
    console.log('escolha outro filme')
}

//---------- DESAFIO 2 --------------

/*
2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

const nomeDoComprador = prompt('Infomer seu nome e sobrenome:');
const tipoDeJogo = prompt('Qual tipo de jogo ? IN (Internacional) ou DO (Doméstico)');
const etapaJogo = prompt('Qual etapa? SF(Semi-final), DT(Decisão de terceiro) ou FI (final) ');
const categoria = prompt('Qual a categoria? 1,2,3 ou 4');
const QuantidadeIngresso = Number(prompt('Quantos ingresos? APENAS NÚMEROS'));
let valorIngresso;
let valorTotal;

const vendaIgressos = {
    comprador: nomeDoComprador.toUpperCase(),
    tipo: tipoDeJogo.toLowerCase(),
    etapa: etapaJogo.toLowerCase(),
    categorias: categoria,
    ingresso: QuantidadeIngresso
};

function imprimeDadosComprador(vendaIgressos) {
    if (vendaIgressos.tipo === 'do') {
        valorTotal = valorIngresso * QuantidadeIngresso
    } else {
        valorTotal = (valorIngresso * 4.10) * QuantidadeIngresso
    };

    console.log(`---Dados da compra---`);
    console.log(`Nome do cliente: ${vendaIgressos.comprador}`);
    if (vendaIgressos.tipo === 'do') {
        console.log(`tipo de jogo: Nacional`);
    } else {
        console.log(`tipo de jogo: Internacional`);
    };

    switch (vendaIgressos.etapa) {
        case 'sf':
            console.log(`Etapa do jogo: Semi-Final.`);
            break;
        case 'dt':
            console.log(`Etapa do jogo: Decisão de Terceiro lugar.`);
            break;
        default:
            console.log(`Etapa do jogo: Final.`);
            break;
    };
    console.log(`Categoria: ${vendaIgressos.categorias}`);
    console.log(`Quantidade de ingressos: ${vendaIgressos.ingresso}`);
    console.log(`---Valores---`);
    console.log(`valor do ingresso: R$ ${valorIngresso}`);
    console.log(`Valor total: R$ ${valorTotal}`);
}

switch (vendaIgressos.tipo) {
    case 'do':
        switch (vendaIgressos.etapa) {
            case 'sf':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 1320;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 880;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 550;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 220;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
            case 'dt':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 660;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 440;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 330;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 170;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
            case 'fi':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 1980;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 1320;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 880;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 330;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
                break;


        }
        break;
    case 'in':
        switch (vendaIgressos.etapa) {
            case 'sf':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 1320;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 880;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 550;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 220;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
                break
            case 'dt':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 660;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 440;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 330;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 170;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
                break
            case 'fi':
                switch (vendaIgressos.categorias) {
                    case 1:
                        valorIngresso = 1980;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 2:
                        valorIngresso = 1320;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    case 3:
                        valorIngresso = 880;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                    default:
                        valorIngresso = 330;
                        imprimeDadosComprador(vendaIgressos);
                        break;
                }
                break;


        }
        break;


}


