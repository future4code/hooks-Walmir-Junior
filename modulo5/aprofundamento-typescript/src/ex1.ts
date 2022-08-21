//LETRA A)

let myString :string = "minha string"

//myString = 45 ----> Não é possivel atribuir um valor diferente do tipo string a essa variavel pois ela já esta tipada como string

// LETRA B)

let myNumber :number | string = 0

myNumber = "0"

//LETRA C)

enum Colors {
    PURPLE = "roxo",
    YELLOW = "Amarelo",
    BLUE = "Azul",
    BLACK = "Preto"
}

type Peaple = {
    name:string
    age:number
    favoriteColor:Colors
    //favoriteColor:string
}


const person1: Peaple =  {
    name: "Walmir",
    age: 21,
    favoriteColor: Colors.PURPLE
    //favoriteColor: "Roxo"
}

const person2: Peaple =  {
    name: "Jessica",
    age: 24,
    favoriteColor: Colors.BLACK
}

const person3: Peaple =  {
    name: "Daiane",
    age: 25,
    favoriteColor: Colors.BLUE
}

const person4: Peaple =  {
    name: "Douglas",
    age: 27,
    favoriteColor: Colors.YELLOW
}
