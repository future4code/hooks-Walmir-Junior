import { v4 as generateId } from "uuid";
import { Request, Response } from "express";
import connection from "./connection";
import { User } from "./types";

const bancoDeDados = "Labecomerce_users"

let statusCode = 400;




export const createUSer = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            statusCode = 422;
            throw new Error("passe todos os parâmetros");
        }

        const newUser:User = {
            id: generateId(),
            name,
            email,
            password
        }

     await connection.raw(`
        INSERT INTO ${bancoDeDados} (id, name, email, password)
        VALUES ("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}");
     `)

     res.status(200).send("Usuário adicionado com sucesso!")

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
}

export const getUsers = async (req:Request, res: Response) => {

    try {

        const result = await connection.raw(`
            SELECT * FROM ${bancoDeDados};
        `);

        res.status(200).send(result[0]);

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}
