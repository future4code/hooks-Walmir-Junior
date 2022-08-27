export type Client = {
    clientId: string,
    accountId: string,
    name: string,
    cpf: string,
    birthDate: string
    balance: number,
    debit: number[],
    receivedTransfer:number[],
    transferSent:number[]
}