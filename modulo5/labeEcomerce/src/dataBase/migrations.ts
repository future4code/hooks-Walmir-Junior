import connection from "./connection";
import { Tables } from "./types";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255),
            product_id VARCHAR(255),
            quantity INT NOT NULL,
            total_price DECIMAL(10,2) NOT NULL,
            FOREIGN KEY ( user_id) REFERENCES ${Tables.USERS}(id),
            FOREIGN KEY ( product_id) REFERENCES ${Tables.PRODUCT}(id)
            );
        `)

        console.log("Tabela criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela.")
        console.log(error.sqlMessage)
    }
}

async function popularTabela() {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_products (id,name, price, image_url)
            VALUES 
            ("001", "produto1", 59, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("002", "produto2", 86, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("003", "produto3", 4, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("004","produto4", 32,"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("005", "produto5", 92, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ");
        `)

        console.log("Tabela populada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao popular tabela.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
// .then(() => popularTabela())
.finally(() => process.exit())