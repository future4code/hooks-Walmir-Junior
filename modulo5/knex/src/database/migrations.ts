import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Emplooyes  (
            id INT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL
            );
        `)

        console.log("Tabela Produtos criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO Emplooyes (id, nome, email)
            VALUES 
            (1, "Chinelo","calçados@havaiana"),
            (2, "Relógio","acessórios@"),
            (3, "Boné", "acessórios"),
            (4, "Camiseta","roupas"),
            (5, "Calça","roupas");
        `)
        
        console.log("Tabela Produtos populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())