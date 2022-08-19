"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const toDos = [
    {
        userid: (0, uuid_1.v4)(),
        id: (0, uuid_1.v4)(),
        title: "Arrumar um trampo de back-end",
        isCompleted: false
    },
    {
        userid: (0, uuid_1.v4)(),
        id: (0, uuid_1.v4)(),
        title: "Arrumar um trampo de front-end",
        isCompleted: true
    },
    {
        userid: (0, uuid_1.v4)(),
        id: (0, uuid_1.v4)(),
        title: "Arrumar um trampo de full stack",
        isCompleted: false
    }
    // todas false tristeza 😪😪
];
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/ping", (req, res) => {
    res.send("pong");
});
app.get("/toDo", (req, res) => {
    const statusTrue = toDos.filter((toDo) => {
        return toDo.isCompleted === true;
    });
    res.send(statusTrue);
});
app.post("/createToDo", (req, res) => {
    const title = req.body.title;
    const newToDo = {
        userid: (0, uuid_1.v4)(),
        id: (0, uuid_1.v4)(),
        title,
        isCompleted: false
    };
    toDos.push(newToDo);
    res.send(toDos);
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log((`Server is running in http://localhost:${address.port}`));
    }
    else {
        console.error((`Failure upon starting server.`));
    }
});
