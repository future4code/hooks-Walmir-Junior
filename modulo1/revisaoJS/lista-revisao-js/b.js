// entrada
const a = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function retornaContasComSaldoAtualizado(contas) {
    let soma = 0;
    let novoSaldo = 0;
    // pegar soma dos arrays de cada item
    for (let i = 0; i < a.length; i++) {
        for (let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++ ) {
            soma += contas[i].compras[somaCompras];
            novoSaldo = contas[i].saldoTotal - soma;
            contas[i].saldoTotal = novoSaldo;
            soma = 0;

        }
        contas[i].compras = [];
    }
    return contas;
}



