import { User, users } from "./data"

export const returnQueryType = (type:string) :User[] => {
    
    const queryTypes = users.filter((user) => {
            return user.type.toLowerCase() === type
        })

    return queryTypes
}