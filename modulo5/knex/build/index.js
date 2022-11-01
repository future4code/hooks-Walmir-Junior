"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./database/connection"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let statusError = 400;
app.get("/emplooyes", async (req, res) => {
    const emplooyes = req.query.emplooyes;
    try {
        if (!emplooyes) {
            const allEmplooyes = await connection_1.default.raw(`SELECT * FROM Emplooyes`);
            return res.send(allEmplooyes[0]);
        }
        const specificEmplooye = await connection_1.default.raw(`SELECT * FROM Emplooyes WHERE nome = Chinelo`);
        res.send(specificEmplooye);
    }
    catch (error) {
        res.send(error);
    }
});
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
//# sourceMappingURL=index.js.map