import express, { Response, Request } from "express";
import cors from "cors";
import { User, users } from "./data"
import { returnQueryType } from "./function";


const app = express();
app.use(express.json());
app.use(cors());
let statusCode = 400

// exercio 1
// A) O metodo correto é o GET pois quero pegar dados sem alteralos;
// B) Declararia da seguinte forma /users pois faz sentido pois quero pegar todos os usuarios;

app.get("/users", (req: Request, res: Response) => {
    res.send(users);
})

//exercio 2
//A) passei como query params pois na minha visão ele é melhor para questoes que pedem uma filtragem;
//B) Sim,  construindo um enum (coisa que eu não fiz por preguiça!), pois ai só poderia retornar os valores dele;

app.get("/users/type", (req: Request, res: Response) => {
    const type = String(req.query.type).toLowerCase();
    
    try {
        if(!type){
            statusCode = 422;
            throw new Error("missing type");
        }
        console.log(type)
       res.send(returnQueryType(type));

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})

//exercio 3
//A) Utiliza-se o metodo query para se fazer buscas;

app.get("/users/find",  (req: Request, res: Response) =>{
    const queryUser = String(req.query.queryUser).toLowerCase();

    try {

        // B)
        const user = users.find((user) => user.name.toLowerCase() === queryUser as string)

        if(!user) {
            statusCode = 404;
            throw new Error("user not found!");
        }

        res.send(user)
        
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}) 

//exercio 4
//A) Nada mudou;
//B) Não acho que seja adequado pois o put serve para atualizar dados já existentes,  não criar novos como POST faz;
// app.put("/users/createNewUser", (req:Request, res:Response)=> {
//     const { id, name, email, type, age} = req.body;

//     try {

//         if(!id || !name || !email || !type || !age){
//             statusCode = 422
//             throw new Error("missing params");
//         }

//         const newUser :User = {
//             id,
//             name,
//             email,
//             type,
//             age,
//         }

//         users.push(newUser);

//         res.send(users);
        
//     } catch (error:any) {
//         res.status(statusCode).send(error.message)
//     }
// })

app.post("/users/createNewUser", (req:Request, res:Response)=> {
    const { id, name, email, type, age} = req.body;

    try {

        if(!id || !name || !email || !type || !age){
            statusCode = 422
            throw new Error("missing params");
        }

        const newUser :User = {
            id,
            name,
            email,
            type,
            age,
        }

        users.push(newUser);

        res.send(users);
        
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("o servidor está online na porta  3003");
})