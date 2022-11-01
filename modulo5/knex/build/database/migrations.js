"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const criarTabelaProdutos = async () => {
    try {
        await connection_1.default.raw(`
            CREATE TABLE IF NOT EXISTS Emplooyes  (
            id INT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL
            );
        `);
        console.log("Tabela Produtos criada com sucesso.");
    }
    catch (error) {
        console.log("Erro ao criar tabela Produtos.");
        console.log(error.sqlMessage);
    }
};
async function popularTabelaProdutos() {
    try {
        await connection_1.default.raw(`
            INSERT INTO Emplooyes (id, nome, email)
            VALUES 
            (1, "Chinelo","calçados@havaiana"),
            (2, "Relógio","acessórios@"),
            (3, "Boné", "acessórios"),
            (4, "Camiseta","roupas"),
            (5, "Calça","roupas");
        `);
        console.log("Tabela Produtos populada com sucesso.");
    }
    catch (error) {
        console.log("Erro ao popular tabela Produtos.");
        console.log(error.sqlMessage);
    }
}
criarTabelaProdutos()
    .then(() => popularTabelaProdutos())
    .finally(() => process.exit());
//# sourceMappingURL=migrations.js.map