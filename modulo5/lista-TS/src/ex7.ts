type Product = {
    name:string,
    quantity:number,
    unitaryValue: number | string
}

const products:Product[] = [
	{ name: "MacMugffin", quantity: 37, unitaryValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unitaryValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unitaryValue: 571.5},
	{ name: "O precioso", quantity: 1, unitaryValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unitaryValue: 17},
	{ name: "Plumbus", quantity: 13, unitaryValue: 140.44},
	{ name: "Pokebola", quantity: 200, unitaryValue: 99.9915}
]

const fixPrice = (price:number | string) :string => {

    const adjustedPrice:string = price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}).replace(".", ",")
    
    return adjustedPrice
}


const adjustePriceProducts = (productsList:Product[]) :Product[] => {
    const fitPrics = productsList.map((product:Product) =>{
        fixPrice(product.unitaryValue)
        return product
    })

    return fitPrics
}
console.log(adjustePriceProducts(products))
