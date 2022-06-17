import React from "react"
import { useNavigate } from "react-router-dom"
import { back } from "../../../Coordinator/Coordinator"

const CreateTrip = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h1> Criar viagem</h1>

                <form>
                    <input placeholder="Nome" />

                    <select><option selected disabled>Escolha um planeta</option></select>

                    <input placeholder="dd/mm/aaaa" type="date" />
                    <input placeholder="Descrição" />
                    <input placeholder="Duração de dias" />
                </form>

                <div>
                    <button onClick={() => back(navigate)}>Voltar</button>
                    <button type="submit">Criar</button>
                </div>

            </div>
        </>
    )
}

export default CreateTrip
