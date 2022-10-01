import { Purchase } from "../models/Purchase";
import BaseDatabase from "./BaseDatabase";

export class PuchaseDatabase extends BaseDatabase{
    
    private static TABLE_PURCHASES = "Labe_Purchases"

    public async getPurchase (){
        const result = await PuchaseDatabase.connection(
            PuchaseDatabase.TABLE_PURCHASES
        ).select()

        return result
    }

    // public async createPurchase (purchase:Purchase){
    //     await 
    // }
}