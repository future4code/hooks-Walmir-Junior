import { Product } from "../models/Product";
import BaseDatabase from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    private static TABLE_PRODUCTS = "Labe_Products";

    public async getProducts (){
        const resut = await ProductDatabase.connection(
            ProductDatabase.TABLE_PRODUCTS  
        ).select()

        return resut
    }

    public async createProduct (product:Product){
        await ProductDatabase.connection(
            ProductDatabase.TABLE_PRODUCTS
        ).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }
}