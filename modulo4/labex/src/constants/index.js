export const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/walmir-turma-hooks'

export const axiosConfig = {
    headers: {
        auth: localStorage.getItem('token')
    }
}