"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// exercio 3
const users = [
    {
        id: 1,
        name: "walmir",
        phone: "(21) 98688-9926",
        email: "walmir@labenu.com",
        website: "walmirDev.com",
        posts: [
            {
                userid: 1,
                id: 30,
                title: "Netiflix contrata time brasileiro",
                body: "A Netflix decidiu investir em devs brasileiros",
            }
        ]
    },
    {
        id: 2,
        name: "Douglas",
        phone: "(21) 99269-8688",
        email: "douglas@labenu.com",
        website: "douglasrDev.com",
        //exercicio 6
        posts: [{
                userid: 2,
                id: 31,
                title: "Backend não tem css amém",
                body: "Não vou mais sofrr com estilização",
            }]
    }
];
//exercico 6 ---> acho melhor criar dentro do array de usuarios pois se trata de uma informação do mesmo.
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//exercicio 1
app.get("/", (req, res) => {
    res.send("hello, backend");
});
//exercicio 4
app.get("/users", (req, res) => {
    res.send(users);
});
//exercicio 7
app.get("/users/posts", (req, res) => {
    const userPosts = users.map((posts) => {
        return posts.posts;
    }).flat();
    res.send(userPosts);
});
//exercicio 8
app.get("/users/postsId/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    const userPostById = users.map((user) => {
        if (user.id === userId) {
            return user.posts;
        }
    }).flat();
    res.send(userPostById);
});
app.listen(3003, () => {
    console.log("o servidor está online na porta  3003");
});
