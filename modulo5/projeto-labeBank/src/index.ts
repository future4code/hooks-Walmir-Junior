import express, {Request, Response} from 'express';
import cors from 'cors';
import { v4 as generateId } from 'uuid';
import { Client } from './types';
import {clients} from "./listClients"
import { validateCpf, checkIsOfAge } from './functions';

const app = express();
app.use(express.json());
app.use(cors());
let statusCode = 400 


app.get("/clients", (req:Request, res:Response) =>{
    res.send(clients);
})

app.get("/clients/:name/Balance",  (req:Request, res:Response) =>{
    const name = req.params.name
    const cpf = req.query.cpf;

    try {

        if(!name || !cpf) {
            statusCode = 422
            throw new Error("passe todos os parâmetros")
        }

        const client:Client | undefined = clients.find((client: Client) => {
            console.log(client)
            client.cpf === cpf &&
            client.name.toUpperCase().includes(name.toUpperCase())

            return client
        })

        if(!client) {
            console.log(client)
            statusCode = 404
            throw new Error("não encontrado")
        }

        res.send(client)

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})

app.post("/createAccount", (req:Request, res:Response) => {

    const name = req.body.name;
    const cpf = req.body.cpf;
    const birthDate = req.body.birthDate;
    const isRegistered = clients.find((client) => client.cpf === cpf );
    const isValid = validateCpf(cpf);
    const isOfAge = checkIsOfAge(birthDate)
    
    try{

        if(!name || !cpf || !birthDate) throw new Error("Passe todos os parâmrtros");
        if(isRegistered)  throw new Error("CPF já cadastrado");
        if(isValid === false)  throw new Error("CPF não é valido");
        if(isOfAge === false)  throw new Error("Você precisa ter a idade minina");

    
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

    } catch (error:any) {

        res.status(statusCode).send(error.message)
        
    }
    
} )











app.listen(3003, ()=> {
    console.log('online in http://localhost:3003')
})

