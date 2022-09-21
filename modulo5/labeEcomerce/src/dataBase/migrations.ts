import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Labecomerce_users  (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela Labecomerce_users criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela Labecomerce_users.")
        console.log(error.sqlMessage)
    }
}

async function popularTabela() {
    try {
        await connection.raw(`
            INSERT INTO Labecomerce_users (id,name, email, password)
            VALUES 
            ("001", "walmir", "walmir@labenu.com", "12345678"),
            ("002", "Daiane", "Daiane@labenu.com", "87654321"),
            ("003", "Pétala", "petala@labenu.com", "220821"),
            ("004","Thaynara", "thaynara@labenu.com","21122000"),
            ("005", "Jessica", "jesseica@labenu.com", "140522");
        `)

        console.log("Tabela populada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao popular tabela.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabela())
.finally(() => process.exit())