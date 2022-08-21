import  express  from "express"
import cors from "cors"

//exercicio 2

type User = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string
    posts:Post[]
}
// exercio 3
const users:User[] = [
    {
    id:1,
    name:"walmir",
    phone: "(21) 98688-9926",
    email:"walmir@labenu.com",
    website:"walmirDev.com",
    posts:[
        {
            userid: 1,
            id: 30,
            title: "Netiflix contrata time brasileiro",
            body: "A Netflix decidiu investir em devs brasileiros",
        }
    ]
    
    },
    {
    id:2,
    name:"Douglas",
    phone: "(21) 99269-8688",
    email:"douglas@labenu.com",
    website:"douglasrDev.com",
    //exercicio 6
    posts:[   {
        userid: 2,
        id: 31,
        title: "Backend não tem css amém",
        body: "Não vou mais sofrr com estilização",
    }]
    }
]

//exercicio 5

type Post = {
    userid:number
    id:number
    title:string,
    body:string,
}

//exercico 6 ---> acho melhor criar dentro do array de usuarios pois se trata de uma informação do mesmo.



const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1
app.get("/", (req, res) => {
    res.send("hello, backend")
})

//exercicio 4
app.get("/users", (req, res) => {
    res.send(users)
})

//exercicio 7
app.get("/users/posts", (req, res) =>{
   const userPosts = users.map((posts) => {
    return posts.posts
   }).flat()

   res.send(userPosts)
})

//exercicio 8
app.get("/users/postsId/:userId", (req, res) =>{
   
    const userId = Number(req.params.userId)

    const userPostById = users.map((user)=> {
        if(user.id === userId){
            return user.posts
        }
    }).flat()

   res.send(userPostById)
   //ficou alguma coisa como null no postman que eu não sei o que é
})





app.listen(3003, () => {
    console.log("o servidor está online na porta  3003")
})