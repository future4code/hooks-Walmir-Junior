const operations = (num1, num2) => {
    let higherNumber;
    let smallestNuber;
    let sum = num1 + num2;
    let muitiplication = num1 * num2;
    let division = num1 / num2;
    if (num1 > num2) {
        higherNumber = num1;
        smallestNuber = num2;
    }
    else {
        higherNumber = num2;
        smallestNuber = num1;
    }
    let subtraction = higherNumber - smallestNuber;
    return `
    operações sobre ${num1} e ${num2}
    soma: ${sum}
    subtração: ${subtraction}
    multiplicação: ${muitiplication}
    divisão: ${division}
    maior numero: ${higherNumber === smallestNuber ? "eles são iguais" : higherNumber}
    `;
};
console.log(operations(2, 4));
//# sourceMappingURL=ex6.js.map