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
const types_1 = require("./types");
const criarTabelaProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255),
            product_id VARCHAR(255),
            quantity INT NOT NULL,
            total_price DECIMAL(10,2) NOT NULL,
            FOREIGN KEY ( user_id) REFERENCES ${types_1.Tables.USERS}(id),
            FOREIGN KEY ( product_id) REFERENCES ${types_1.Tables.PRODUCT}(id)
            );
        `);
        console.log("Tabela criada com sucesso.");
    }
    catch (error) {
        console.log("Erro ao criar tabela.");
        console.log(error.sqlMessage);
    }
});
function popularTabela() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection_1.default.raw(`
            INSERT INTO labecommerce_products (id,name, price, image_url)
            VALUES 
            ("001", "produto1", 59, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("002", "produto2", 86, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("003", "produto3", 4, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("004","produto4", 32,"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"),
            ("005", "produto5", 92, "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ");
        `);
            console.log("Tabela populada com sucesso.");
        }
        catch (error) {
            console.log("Erro ao popular tabela.");
            console.log(error.sqlMessage);
        }
    });
}
criarTabelaProdutos()
    .finally(() => process.exit());
//# sourceMappingURL=migrations.js.map