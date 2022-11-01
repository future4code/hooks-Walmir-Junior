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
exports.getPurchases = exports.addPurchase = exports.getProducts = exports.addProduct = exports.getUsers = exports.createUSer = void 0;
const uuid_1 = require("uuid");
const connection_1 = __importDefault(require("./connection"));
const types_1 = require("./types");
let statusCode = 400;
const createUSer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            statusCode = 422;
            throw new Error("passe todos os parâmetros");
        }
        const newUser = {
            id: (0, uuid_1.v4)(),
            name,
            email,
            password
        };
        yield connection_1.default.raw(`
        INSERT INTO ${types_1.Tables.USERS} (id, name, email, password)
        VALUES ("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
     `);
        res.status(200).send("Usuário adicionado com sucesso!");
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.createUSer = createUSer;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM ${types_1.Tables.USERS};
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.getUsers = getUsers;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, image_url } = req.body;
    try {
        if (!name || !price || !image_url) {
            statusCode = 422;
            throw new Error("parâmetros faltando");
        }
        const newProduct = {
            id: (0, uuid_1.v4)(),
            name,
            price,
            image_url
        };
        yield connection_1.default.raw(`
            INSERT INTO ${types_1.Tables.PRODUCT} (id, name, price, image_url)
            VALUES("${newProduct.id}", "${newProduct.name}", ${newProduct.price}, "${newProduct.image_url}");
        `);
        res.status(200).send("cadastrado com sucesso");
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.addProduct = addProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM ${types_1.Tables.PRODUCT};
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.getProducts = getProducts;
const addPurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, product_id, quantity } = req.body;
    try {
        if (!user_id || !product_id || !quantity) {
            statusCode = 422;
            throw new Error("parâmetros faltando");
        }
        const user = yield connection_1.default.raw(`

            SELECT * FROM ${types_1.Tables.USERS} AS u
            WHERE u.id = "${user_id}"
        `);
        if (!user) {
            statusCode = 404;
            throw new Error("produto não encontrado");
        }
        const [productPrice] = yield connection_1.default.raw(`
            SELECT p.price FROM ${types_1.Tables.PRODUCT} AS p
            WHERE p.id = "${product_id}"
        `);
        console.log(productPrice);
        if (!productPrice) {
            statusCode = 404;
            throw new Error("produto não encontrado");
        }
        const newPurchase = {
            id: (0, uuid_1.v4)(),
            user_id,
            product_id,
            quantity,
            total_price: productPrice
        };
        yield connection_1.default.raw(`
        INSERT INTO ${types_1.Tables.PURCHASES} (id, user_id, product_id, quantity, total_price)
        VALUES("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}", ${newPurchase.quantity}, ${newPurchase.total_price});
    `);
        res.send("compra realizada");
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.addPurchase = addPurchase;
const getPurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM ${types_1.Tables.PURCHASES};
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.getPurchases = getPurchases;
//# sourceMappingURL=endpoints.js.map