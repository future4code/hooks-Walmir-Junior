let myString = "minha string";
let myNumber = 0;
myNumber = "0";
var Colors;
(function (Colors) {
    Colors["PURPLE"] = "roxo";
    Colors["YELLOW"] = "Amarelo";
    Colors["BLUE"] = "Azul";
    Colors["BLACK"] = "Preto";
})(Colors || (Colors = {}));
const person1 = {
    name: "Walmir",
    age: 21,
    favoriteColor: Colors.PURPLE
};
const person2 = {
    name: "Jessica",
    age: 24,
    favoriteColor: Colors.BLACK
};
const person3 = {
    name: "Daiane",
    age: 25,
    favoriteColor: Colors.BLUE
};
const person4 = {
    name: "Douglas",
    age: 27,
    favoriteColor: Colors.YELLOW
};
//# sourceMappingURL=ex1.js.map