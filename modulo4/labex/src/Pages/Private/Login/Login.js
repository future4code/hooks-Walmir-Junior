import React from "react";
import { goToAdmHome } from "../../../Coordinator/Coordinator";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Login</h1>

            <input placeholder="E-mail" type='email' />
            <input placeholder="Senha" type='password' />

            <button onClick={() => goToAdmHome(navigate)}>Entrar</button>
        </>
    )
}

export default Login