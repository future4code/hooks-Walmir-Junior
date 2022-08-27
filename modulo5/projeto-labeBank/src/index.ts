import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as generateId } from 'uuid';
import { Client } from './types';
import { clients } from "./listClients"
import { validateCpf, checkIsOfAge, compereDates } from './functions';
import { RETURNS } from './enum';

const app = express();
app.use(express.json());
app.use(cors());
let statusCode = 400


app.get("/clients", (req: Request, res: Response) => {
    res.send(clients);
})

app.get("/clients/:name/Balance", (req: Request, res: Response) => {
    const name = req.params.name
    const cpf = req.query.cpf;

    try {

        if (!name || !cpf) {
            statusCode = 422
            throw new Error("passe todos os parâmetros")
        }

        const client: Client | undefined = clients.find((client: Client) => {
            console.log(client)
            return client.cpf === cpf &&
                client.name.toUpperCase().includes(name.toUpperCase())

        })

        if (!client) {
            console.log(client)
            statusCode = 404
            throw new Error("não encontrado")
        }

        res.send(`R$ ${client.balance}`)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.post("/createAccount", (req: Request, res: Response) => {

    const name = req.body.name;
    const cpf = req.body.cpf;
    const birthDate = req.body.birthDate;
    const isRegistered = clients.find((client) => client.cpf === cpf);
    const isValid = validateCpf(cpf);
    const isOfAge = checkIsOfAge(birthDate)

    try {

        if (!name || !cpf || !birthDate) throw new Error("Passe todos os parâmrtros");
        if (isRegistered) throw new Error("CPF já cadastrado");
        if (isValid === false) throw new Error("CPF não é valido");
        if (isOfAge === false) throw new Error("Você precisa ter a idade minina");


        const newClient: Client = {

            clientId: generateId(),
            accountId: generateId(),
            name,
            cpf,
            birthDate,
            balance: 0,
            debit: [],
            receivedTransfer: [],
            transferSent: []
        }


        clients.push(newClient);

        res.send(newClient);

    } catch (error: any) {

        res.status(statusCode).send(error.message)

    }

})

app.put("/clients/addBalance", (req: Request, res: Response) => {
    const { name, cpf, value } = req.body;

    try {

        if (!name || !cpf || !value) {
            statusCode = 422;
            throw new Error("Um ou mais parâmetros faltando");
        }

        const client: Client | undefined = clients.find((client) =>
            client.cpf === cpf &&
            client.name.toUpperCase().includes(name.toUpperCase())
        );

        if (!client) {
            statusCode = 404;
            throw new Error("não encontrado");
        }

        client.balance += Number(value)

        res.send(`O saldo foi acrescido seu novo saldo é R$ ${client.balance.toFixed(2)}`)

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})

app.put("/clients/:id/payment", (req: Request, res: Response) => {
    const { value, description, date } = req.body;
    const id = req.params.id;

    try {

        // verifica se o id foi passado
        if (!id) {
            statusCode = 422;
            throw new Error("informe o id");
        }

        // vetifica se o descrição e o valor foram passados
        if (!value || !description) {
            statusCode = 422;
            throw new Error("Um ou mais parâmetos faltando");
        }

        // procura o id no array
        const client = clients.find((client) => client.accountId === id)
        const debit = Number(value)

        // Verifica se o cliente fo encontrado
        if (!client) {
            statusCode = 404;
            throw new Error("Cliente não encontrado")
        }

        // Verifica se o cliente tem saldo para pagar a conta 
        if (debit > client.balance) {
            statusCode = 400;
            throw new Error("Saldo insuficiente");
        }

        // Verifica se a data é menor que a data atual
        const checkDates = compereDates(date);

        switch (checkDates) {
            case RETURNS.LESS:
                statusCode = 400;
                throw new Error("A data não pode ser menor que a data atual");

            case RETURNS.BIGGER:
                client.balance -= debit 
                return client.debit.push(debit)


            case RETURNS.EQUAL:
                client.balance -= debit 
                return client.debit.push(debit)

            default:
                break;
        }

        res.send("Sua conta foi paga")

    } catch (error: any) {
        res.status(statusCode).send(error.message)
    }
})





app.listen(3003, () => {
    console.log('online in http://localhost:3003')
})

