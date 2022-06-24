import React from "react"
import { useNavigate } from "react-router-dom"
import { Conteiner, ConteinerBtn, ConteinerTrip } from "./styled"
import space from '../../media/space.png'
const CardTrips = (props) => {
    const navigate = useNavigate()
    return (
        <Conteiner onClick={() => navigate(`/ApplicationForm/${props.trip.name}}/${props.trip.id}`)} img={space}>
            <ConteinerTrip>
                <h3>{props.trip.name}</h3>
                <p>{props.trip.description}</p>
                <h4>{props.trip.planet}</h4>
                <p>{props.trip.date}</p>
            </ConteinerTrip>

            <ConteinerBtn>
                <button onClick={() => navigate(`/ApplicationForm/${props.trip.name}}/${props.trip.id}`)}>Inscrever-se</button>
            </ConteinerBtn>
        </Conteiner>
    )
}

export default CardTrips