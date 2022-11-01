"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const endpoints_1 = require("./dataBase/endpoints");
app_1.default.post("/users", endpoints_1.createUSer);
app_1.default.get("/users", endpoints_1.getUsers);
app_1.default.post("/products", endpoints_1.addProduct);
app_1.default.get("/products", endpoints_1.getProducts);
app_1.default.post("/purchases", endpoints_1.addPurchase);
app_1.default.get("/purchases", endpoints_1.getPurchases);
//# sourceMappingURL=index.js.map