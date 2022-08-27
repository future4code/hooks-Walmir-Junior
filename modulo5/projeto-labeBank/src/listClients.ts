import {Client} from './types'
import { v4 as generateId } from 'uuid';

export const clients:Client[] = [
    {
        clientId: generateId(),
        accountId: generateId(),
        name:"Pétala da Costa Figueiredo",
        cpf: "111.222.333-45",
        birthDate:"22/08/2021",
        balance : 1000,
        debit: [],
        receivedTransfer:[],
        transferSent:[]
    },
    {
        clientId: generateId(),
        accountId: generateId(),
        name:"Thaynara Amélia Santos da Costa",
        cpf: "222.222.333-45",
        birthDate:"21/12/2000",
        balance :  0,
        debit: [],
        receivedTransfer:[],
        transferSent:[]
    },
    
] 