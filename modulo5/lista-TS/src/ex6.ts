type Costumers = {
    client:string,
    totalBalance:number,
    debts:number[]
    
}

const clients:Costumers[] =
[
	{ client: "João", totalBalance: 1000, debts: [100, 200, 300] },
	{ client: "Paula", totalBalance: 7500, debts: [200, 1040] },
	{ client: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
	{ client: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
	{ client: "Artur", totalBalance: 1800, debts: [200, 300] },
	{ client: "Soter", totalBalance: 1200, debts: [] }
]

const getCostumersWithNegativeBalance = (clients:Costumers[]) :Costumers[] => {

    const upDateBalaces = clients.map((costumers:Costumers) =>{
        const newBalance = costumers.debts.reduce((previousValue:number, currentValue:number) => previousValue + currentValue, 0)
        costumers.totalBalance -= newBalance 
        costumers.debts = []
        return costumers
    })

    const getNegativeBalaces = upDateBalaces.filter((costumers:Costumers)=>{
        return costumers.totalBalance < 0
    })

    return getNegativeBalaces
}

console.log(getCostumersWithNegativeBalance(clients))

