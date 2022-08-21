"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
index_1.app.get("/", (req, res) => {
    res.send("hello, backend");
});
