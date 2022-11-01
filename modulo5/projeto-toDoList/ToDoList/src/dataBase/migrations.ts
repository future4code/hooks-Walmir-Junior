import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Users  (
            id INT UNIQUE AUTO_INCREMENT NOT NULL
            name VARCHAR(255) NOT NULL,
            nickName VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL
            );
        `)

        console.log("Tabela Produtos criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO Emplooyes (id,name, nickName, email)
            VALUES 
            (1,"walmir", "King", "wal@mir.com"),
            (2,"thaynara", "queen", "tha.y@nara.com"),
            (3,"pétala", "princess", "pe@tala.com"),
            (4,"daiane","counselor", dai@ane.com),
            (5,"jessica", "general", "jes@sica.com);
        `)

        console.log("Tabela Produtos populada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao popular tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())