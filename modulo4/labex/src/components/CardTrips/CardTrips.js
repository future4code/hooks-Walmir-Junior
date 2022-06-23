import React from "react"
import { useNavigate } from "react-router-dom"
import { goToForm } from "../../Coordinator/Coordinator"
import { Conteiner, ConteinerBtn, ConteinerTrip } from "./styled"
import space from '../../media/space.png'
const CardTrips = (props) => {
    const navigate = useNavigate()
    return (
        <Conteiner onClick={() => goToForm(navigate)} img={space}>
            <ConteinerTrip>
                <h3>{props.trip.name}</h3>
                <p>{props.trip.description}</p>
                <h4>{props.trip.planet}</h4>
                <p>{props.trip.date}</p>
            </ConteinerTrip>

            <ConteinerBtn>
                <button onClick={() => goToForm(navigate)}>Inscrever-se</button>
            </ConteinerBtn>
        </Conteiner>
    )
}

export default CardTrips