import React from "react"
import { useNavigate } from "react-router-dom"
import { back } from "../../../Coordinator/Coordinator"

const ApplicationForm = () => {
    const navigate = useNavigate()
    return (
        <>
          <button onClick={() => back(navigate)}>voltar</button> 
            <form>
                    <select><option selected disabled>Escolha uma viagem</option></select>

                    <input placeholder="nome" />

                    <input placeholder="idade" type="number" />

                    <input placeholder="Texto de candidatura" />

                    <input placeholder="Profissão" />

                    <select><option selected disabled>Selecione seu país</option></select>

                    <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default ApplicationForm