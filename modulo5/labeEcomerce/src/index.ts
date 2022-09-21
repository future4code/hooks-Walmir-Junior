import app from "./app";
import { createUSer, getUsers } from "./dataBase/endpoints";

app.post("/users", createUSer);

app.get("/users", getUsers);