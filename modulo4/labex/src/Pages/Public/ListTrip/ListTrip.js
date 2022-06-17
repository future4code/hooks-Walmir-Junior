import React from "react"
import {useNavigate} from "react-router-dom"
import { goToForm, back } from "../../../Coordinator/Coordinator"
const ListTrip = () => {   
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => goToForm(navigate)}>Inscrever-se</button>
            <button onClick={() => back(navigate)}>voltar</button> 
        </>
    )
}

export default ListTrip