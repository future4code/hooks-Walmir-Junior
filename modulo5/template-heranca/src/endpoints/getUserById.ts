import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";

export const getUserById =  async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const id = req.params.id

        const userDataBase = new UserDatabase()
        const result = await userDataBase.getUserById(id)

        res.send({user: result})

    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}