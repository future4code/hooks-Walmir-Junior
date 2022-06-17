import React from "react";
import { useNavigate } from "react-router-dom";
import { back, goToCreate, goToHome } from "../../../Coordinator/Coordinator";

const AdminHome = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Boas vindas!</h1>
            <h2>Painel Administrativo</h2>

            <button onClick={() => goToHome(navigate)}>Voltar</button>
            <button onClick={() => goToCreate(navigate)}>Criar viagem</button>
            <button onClick={() => back(navigate)}>logout</button>
        </>
    )
}

export default AdminHome