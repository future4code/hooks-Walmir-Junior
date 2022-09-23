import app from "./app";
import { addProduct, addPurchase, createUSer, getProducts, getPurchases, getUsers } from "./dataBase/endpoints";

app.post("/users", createUSer);

app.get("/users", getUsers);

app.post("/products", addProduct);

app.get("/products", getProducts);

app.post("/purchases", addPurchase);

app.get("/purchases", getPurchases);
