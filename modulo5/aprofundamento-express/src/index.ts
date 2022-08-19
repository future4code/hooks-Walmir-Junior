import  express, {Request, Response}  from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as uuidV4 } from 'uuid';


type ToDo = {
    userid:string,
    id:string
    title: string,
    isCompleted:boolean
}

const toDos:ToDo[] = [
    {
        userid: uuidV4(),
        id: uuidV4(),
        title: "Arrumar um trampo de back-end",
        isCompleted: false
        

    },
    {
        userid: uuidV4(),
        id: uuidV4(),
        title: "Arrumar um trampo de front-end",
        isCompleted: true
        
    },
    {
        userid: uuidV4(),
        id: uuidV4(),
        title: "Arrumar um trampo de full stack",
        isCompleted: false    
    }

    // todas false tristeza 😪😪
] 
const app = express();
app.use(express.json());
app.use(cors());


app.get("/ping", (req, res) => {
    res.send("pong");
})

app.get("/toDo", (req:Request, res:Response) => {
    const statusTrue = toDos.filter((toDo) => {
        return toDo.isCompleted === true;   
    })

    res.send(statusTrue);
})

app.post("/createToDo", (req: Request, res:Response ) => {
    const title = req.body.title;

    const newToDo:ToDo = {
        userid: uuidV4(),
        id: uuidV4(),
        title,
        isCompleted:false
    }
    toDos.push(newToDo);

    res.send(toDos);
})

app.put("/edit",(req: Request, res:Response ) => {
    
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log((`Server is running in http://localhost:${address.port}`));
    } else {
      console.error((`Failure upon starting server.`));
    }

})
