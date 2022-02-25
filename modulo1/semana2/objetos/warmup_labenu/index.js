//Depois, escreva uma função que recebe um objeto que represente uma pessoa com as propriedades: nome e gênero. Essa função deve retornar "Bem-vinda, nomeDaPessoa", caso o valor da propriedade gênero seja "feminino". Caso seja "masculino", deve retornar "Bem-vindo, nomeDaPessoa". Caso o valor da propriedade seja "outro" , devemos retornar "Desejamos boas-vindas!".

const pessoa = {
    nome: "thaynara",
    gernero: "feminino"
};

function boasVindas(objeto){
    if(objeto.gernero === 'feminino'){
        console.log("Bem-Vinda " + pessoa.nome);
    }else {
        console.log(`Bem-Vindo ${pessoa.nome}`);
    }
};

boasVindas(pessoa);