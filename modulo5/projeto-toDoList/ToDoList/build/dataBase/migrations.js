"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const criarTabelaProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.raw(`
            CREATE TABLE IF NOT EXISTS Users  (
            id INT UNIQUE AUTO_INCREMENT NOT NULL
            name VARCHAR(255) NOT NULL,
            nickName VARCHAR(255) NOT NULL,
            email VARCHAR(100) NOT NULL
            );
        `);
        console.log("Tabela Produtos criada com sucesso.");
    }
    catch (error) {
        console.log("Erro ao criar tabela Produtos.");
        console.log(error.sqlMessage);
    }
});
function popularTabelaProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection_1.default.raw(`
            INSERT INTO Emplooyes (id,name, nickName, email)
            VALUES 
            (1,"walmir", "King", "wal@mir.com"),
            (2,"thaynara", "queen", "tha.y@nara.com"),
            (3,"pétala", "princess", "pe@tala.com"),
            (4,"daiane","counselor", dai@ane.com),
            (5,"jessica", "general", "jes@sica.com);
        `);
            console.log("Tabela Produtos populada com sucesso.");
        }
        catch (error) {
            console.log("Erro ao popular tabela Produtos.");
            console.log(error.sqlMessage);
        }
    });
}
criarTabelaProdutos()
    .then(() => popularTabelaProdutos())
    .finally(() => process.exit());
//# sourceMappingURL=migrations.js.map