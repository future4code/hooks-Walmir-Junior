import  express, {Request, Response}  from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as uuidV4 } from 'uuid';


type ToDo = {
    userId:any,
    id:string
    title: string,
    isCompleted:boolean
}

const toDos:ToDo[] = [
    {
        userId: uuidV4(),
        id: uuidV4(),
        title: "Arrumar um trampo de back-end",
        isCompleted: false
        

    },
    {
        userId: uuidV4(),
        id: uuidV4(),
        title: "Arrumar um trampo de front-end",
        isCompleted: true
        
    },
    {
        userId: uuidV4(),
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
  res.send("Pong!")
})

// Exercício 4
app.get("/todos/completed/:isCompleted", (req, res) => {
  let isCompleted: any = req.params.isCompleted

  if (isCompleted === "true") {
    isCompleted = true
  } else if (isCompleted === "false") {
    isCompleted = false
  } else {
    res.send("Path param da tarefa deve ser 'true' ou 'false'")
  }

  const result = []

  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].isCompleted === isCompleted) {
      result.push(toDos[i])
    }
  }

  res.send(result)
})

// Exercício 5
app.post("/todos", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newTodo: ToDo = {
    userId,
    id: uuidV4(),
    title,
    isCompleted: false
  }

  toDos.push(newTodo)

  res.send(toDos)
})

// Exercício 6
app.put("/todos/:id/completed", (req, res) => {

  const id = req.params.id

  for (let todo of toDos) {
    if (todo.id === id) {
      todo.isCompleted = !todo.isCompleted
    }
  }

  res.send(toDos)
})

// Exercício 7
app.delete("/todos/:id", (req, res) => {

  const id = req.params.id

  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].id === id) {
        toDos.splice(i, 1)
    }
  }

  res.send(toDos)
})

app.get("/users/:userId/todos", (req, res) => {
  const userId = Number(req.params.userId)

  const result = []

  for (let todo of toDos) {
    if (todo.userId === userId) {
      result.push(todo)
    }
  }

  res.send(result)
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log((`Server is running in http://localhost:${address.port}`));
    } else {
      console.error((`Failure upon starting server.`));
    }

})
