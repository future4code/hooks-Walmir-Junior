import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const usersName = req.query.usersName || "%"  
 
      const result = await connection("Pessoas")
      .select("name")
      .where("name", "LIKE", `%${usersName}%`)
 
       res.status(200).send(result)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }