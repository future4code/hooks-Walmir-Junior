"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let codeError = 400;
app_1.default.post("/user", (req, res) => {
    const { name, nickName, email } = req.body;
    try {
        if (!name || !nickName || !email) {
            codeError = 422;
            throw new Error("Por favor, preencha todos os campos");
        }
        ;
    }
    catch (error) {
        res.status(codeError).send(error.message);
    }
});
//# sourceMappingURL=index.js.map