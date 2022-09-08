import express, { query, Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection"

const app = express();

app.use(express.json());
app.use(cors());
let statusError = 400;

app.get("/emplooyes", async (req: Request, res: Response) => {
  const emplooyes = req.query.emplooyes;

  try {

    if (!emplooyes) {
      const allEmplooyes = await connection.raw(`SELECT * FROM Emplooyes`);
      return res.send(allEmplooyes[0]);
    }

    const specificEmplooye = await connection.raw(`SELECT * FROM Emplooyes WHERE nome = Chinelo`);

    res.send(specificEmplooye);
  } catch (error: any) {
    res.send(error)
  }
})



app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});