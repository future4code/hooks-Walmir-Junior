// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
};

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()

};


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort(function (a, b) {
      if (a < b) return -1;
      if (b > a) return 1;
      return 0;
   });
   return array;
};

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let numPares = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         numPares.push(array[i]);
      };
   };

   return numPares;
};

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let numPares = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         numPares.push(array[i] ** 2);
      };
   };

   return numPares;

};

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   const maiorNum = Math.max(...array);

   return maiorNum;
};

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   const maiorNum = Math.max(num1, num2);
   const menorNum = Math.min(num1, num2);
   const diferenca = maiorNum - menorNum;
   let divisivel = false;

   if (maiorNum % menorNum === 0) {
      divisivel = true;
   };

   return {
      maiorNumero: maiorNum,
      maiorDivisivelPorMenor: divisivel,
      diferenca: diferenca
   };
};

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = [];
   let numerosPares = 0;

   while (pares.length < n) {
      if (numerosPares % 2 === 0) {
         pares.push(numerosPares);
      };
      numerosPares++;
   };

   return pares;
};




// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let definicao = '';


   if (ladoA === ladoB && ladoA === ladoC) {
      definicao = "Equilátero";
   } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
      definicao = "Escaleno";
   } else {
      definicao = "Isósceles";
   };

   return definicao;
};

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let arr1MaiorE2Maior = [];
   const arrCrescente = array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;

      return 0;
   });
   arr1MaiorE2Maior.push(arrCrescente[arrCrescente.length - 2]);
   arr1MaiorE2Maior.push(arrCrescente[1]);

   return arr1MaiorE2Maior;
};

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join([separador = ', '])}.`
};

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   };
};

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const _idadeMinima = 14;
   const _alturaMinima = 1.5;
   const _idadeMaxima = 60;
   const pessoasAutorizadas = pessoas.filter((item) => {
      return item.altura >= _alturaMinima && item.idade > _idadeMinima && item.idade < _idadeMaxima;
   });

   return pessoasAutorizadas;
};

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const _idadeMinima = 14;
   const _alturaMinima = 1.5;
   const _idadeMaxima = 60;

   const pessoasNaoAutorizadas = pessoas.filter((item) => {
      return item.altura < _alturaMinima || item.idade <= _idadeMinima || item.idade > _idadeMaxima;
   });

   return pessoasNaoAutorizadas;
};


// EXERCÍCIO 14

function retornaContasComSaldoAtualizado(contas) {
   let soma = 0;
   let novoSaldo = 0;
   // pegar soma dos arrays de cada item
   for (let i = 0; i < contas.length; i++) {
      for (let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++) {
         soma += contas[i].compras[somaCompras];
         novoSaldo = contas[i].saldoTotal - soma;
         contas[i].saldoTotal = novoSaldo;
         soma = 0;
      };
      contas[i].compras = [];
   };
   return contas;
};


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   const pacientesABC = consultas.sort((a, b) => {
      if (a.nome > b.nome) return 1;
      if (a.nome < b.nome) return -1;
      return 0;
   });
   return pacientesABC;
};




// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
};









