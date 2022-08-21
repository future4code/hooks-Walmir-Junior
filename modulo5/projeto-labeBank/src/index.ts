import express, {Request, Response} from 'express';
import cors from 'cors';
import { v4 as generateId } from 'uuid';
import { Client } from './types';
import {clients} from "./listClients"
import { validateCpf, checkIsOfAge } from './functions';

const app = express();
app.use(express.json());
app.use(cors());


app.get("/getClients", (req:Request, res:Response) =>{
    res.send(clients);
})

app.post("/createAccount", (req:Request, res:Response) => {

    const name = req.body.name;
    const cpf = req.body.cpf;
    const birthDate = req.body.birthDate;
    const isRegistered = clients.find((client) => client.cpf === cpf );
    const isValid = validateCpf(cpf);
    const isOfAge = checkIsOfAge(birthDate)
    
    try{

        if(!name || !cpf || !birthDate) res.status(400).send("Passe todos os parâmrtros");
        if(isRegistered) res.status(400).send("CPF já cadastrado");
        if(isValid === false) res.status(400).send("CPF não é valido");
        if(isOfAge === false) res.status(400).send("Você precisa ter a idade minina");

    
        const newClient:Client = {

            clientId: generateId(),
            accountId: generateId(),
            name,
            cpf,
            birthDate,
            balance: 0,
            debit: []
        }
    
        clients.push(newClient);

        res.send(newClient);

    } catch (error) {

        res.status(400).send(error);
        
    }
    
} )










app.listen(3003, ()=> {
    console.log('online in http://localhost:3003')
})

