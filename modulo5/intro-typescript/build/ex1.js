const checaTriangulo = (a, b, c) => {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
};
console.log(checaTriangulo(3, 4, 5));
//# sourceMappingURL=ex1.js.map