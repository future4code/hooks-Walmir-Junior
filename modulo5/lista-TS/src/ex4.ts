enum DEPARTMENT {
    SALES = "Vendas",
    MARKETING = "Marketing",
    FINNAMCIAL = "Financeiro"
}

type Employees = {
    name:string,
    salary:number,
    department: DEPARTMENT
    homeOffice:boolean
}

const listEmployees:Employees[] =  [
	{ name: "Marcos", salary: 2500, department: DEPARTMENT.MARKETING, homeOffice: true },
	{ name: "Maria" ,salary: 1500, department: DEPARTMENT.SALES, homeOffice: false},
	{ name: "Salete" ,salary: 2200, department: DEPARTMENT.FINNAMCIAL, homeOffice: true},
	{ name: "João" ,salary: 2800, department: DEPARTMENT.MARKETING, homeOffice: false},
	{ name: "Josué" ,salary: 5500, department: DEPARTMENT.FINNAMCIAL, homeOffice: true},
	{ name: "Natalia" ,salary: 4700, department: DEPARTMENT.SALES, homeOffice: true},
	{ name: "Paola" ,salary: 3500, department: DEPARTMENT.MARKETING, homeOffice: true }
] 

const getEmployeesHomeOffice = (array:Employees[]) :Employees[] => {
    
    const returnEmployeesHomeOffice = array.filter((employee:Employees) => {
        return employee.department === DEPARTMENT.MARKETING && employee.homeOffice === false
    })

    return returnEmployeesHomeOffice
}

console.table(getEmployeesHomeOffice(listEmployees))