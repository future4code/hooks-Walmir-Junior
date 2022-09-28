// type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }
export class Purchase {
    getTotalPrice() {
        throw new Error("Method not implemented.")
    }
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ) { }

    getId() {
        return this.id
    }

    getUserId() {
        return this.userId
    }

    getProductId() {
        return this.productId
    }

    getQuantity() {
        return this.quantity
    }

    getToalPrice() {
        return this.totalPrice
    }
}

// type para tipar no banco de dados com snake_case
export class PurchaseDB {
    constructor(
        private id: string,
        private user_id: string,
        private product_id: string,
        private quantity: number,
        private total_price: number
    ) { }

    getId() {
        return this.id
    }

    getUserId() {
        return this.user_id
    }

    getProductId() {
        return this.product_id
    }

    getQuantity() {
        return this.quantity
    }

    getTotalPrice() {
        return this.total_price
    }

}