const salutation = (name, birthDate) => {
    const splitBithDate = birthDate.split("/");
    const day = splitBithDate[0];
    const month = splitBithDate[1];
    const year = splitBithDate[2];
    const phrese = `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`;
    return phrese;
};
console.log(salutation("walmir", "30/04/2001"));
//# sourceMappingURL=ex1.js.map