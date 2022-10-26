import express, {Request, Response} from "express";
import app from "./app";
let codeError = 400;


app.post("/user", (req:Request , res:Response) => {
    const {name, nickName, email} = req.body;

    try {

        if(!name || !nickName || !email){codeError = 422; throw new Error("Por favor, preencha todos os campos")};

        
        
    } catch (error:any) {
        res.status(codeError).send(error.message);
    }
})