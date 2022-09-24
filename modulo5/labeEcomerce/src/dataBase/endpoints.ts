import { v4 as generateId } from "uuid";
import { Request, Response } from "express";
import connection from "./connection";
import { Product, Purchase, Tables, User } from "./types";



let statusCode = 400;



// Adicionar usuario
export const createUSer = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            statusCode = 422;
            throw new Error("passe todos os parâmetros");
        }

        const newUser: User = {
            id: generateId(),
            name,
            email,
            password
        }

        await connection.raw(`
        INSERT INTO ${Tables.USERS} (id, name, email, password)
        VALUES ("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
     `)

        res.status(200).send("Usuário adicionado com sucesso!")

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}

// pegar lista de usuarios
export const getUsers = async (req: Request, res: Response) => {

    try {

        const result = await connection.raw(`
            SELECT * FROM ${Tables.USERS};
        `);

        res.status(200).send(result[0]);

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}

// adicionar produtos
export const addProduct = async (req: Request, res: Response) => {
    const { name, price, image_url } = req.body;

    try {

        if (!name || !price || !image_url) {
            statusCode = 422;
            throw new Error("parâmetros faltando")
        }

        const newProduct: Product = {
            id: generateId(),
            name,
            price,
            image_url
        }

        await connection.raw(`
            INSERT INTO ${Tables.PRODUCT} (id, name, price, image_url)
            VALUES("${newProduct.id}", "${newProduct.name}", ${newProduct.price}, "${newProduct.image_url}");
        `)

        res.status(200).send("cadastrado com sucesso")

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}

// pegar lista de produtos
export const getProducts = async (req: Request, res: Response) => {

    try {

        const result = await connection.raw(`
            SELECT * FROM ${Tables.PRODUCT};
        `);

        res.status(200).send(result[0]);

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}


// Adicionar contas
export const addPurchase = async (req: Request, res: Response) => {

    const { user_id, product_id, quantity } = req.body;

    try {
        if (!user_id || !product_id || !quantity) {
            statusCode = 422;
            throw new Error("parâmetros faltando");
        }

        const user = await connection.raw(`

            SELECT * FROM ${Tables.USERS} AS u
            WHERE u.id = "${user_id}"
        `)

        if (!user) {
            statusCode = 404;
            throw new Error("produto não encontrado");
        }

        const productPrice = await connection.raw(`
            SELECT p.price FROM ${Tables.PRODUCT} AS p
            WHERE p.id = "${product_id}"
        `)
         
        const price = productPrice[0][0].price

        console.log(productPrice)

        if (!productPrice) {
            statusCode = 404;
            throw new Error("produto não encontrado");
        }

        const newPurchase: Purchase = {

            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price: price * quantity
        }

        await connection.raw(`
        INSERT INTO ${Tables.PURCHASES} (id, user_id, product_id, quantity, total_price)
        VALUES("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}", ${newPurchase.quantity}, ${newPurchase.total_price});
    `)

        res.send("compra realizada")

    } catch (error: any) {
        res.status(statusCode).send(error.message);
    }
}

export const getPurchases = async (req: Request, res: Response) => {

    try {

        const result = await connection.raw(`
            SELECT * FROM ${Tables.PURCHASES};
        `);

        res.status(200).send(result[0]);

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}

export const getUseresPurchase = async (req: Request, res: Response) => {
        const user_id = req.params;
    try {

        if(!user_id){
            statusCode = 422;
            throw new Error("não passou user_id");
        }

        const userPurchase = await connection.raw(`
            SELECT * FROM ${Tables.PURCHASES} AS p
            JOIN ${Tables.USERS} AS u
            ON p.user_id = "${user_id}"
        `)
        
        res.send(userPurchase[0])
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}