import React, { useState} from "react";
import {  back } from "../../../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../constants";


const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    const makeLogin = () => {

        const body = {
            email,
            password
        }

        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            navigate('/AdiminHome')
        })
        .catch((err) => {
            alert('tu fez alguma merda')
            console.log(err)
        })
        
    }
    return (
        <>
            <h1>Login</h1>

            <button onClick={() => back(navigate)}>voltar</button>

            <form>
                <input
                    placeholder="E-mail"
                    type='email'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <input
                    placeholder="Senha"
                    type='password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
            </form>

            <button onClick={makeLogin}>Entrar</button>
        </>
    )
}

export default Login