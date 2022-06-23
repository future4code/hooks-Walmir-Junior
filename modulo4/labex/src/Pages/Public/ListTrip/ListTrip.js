import React from "react"
import { useNavigate } from "react-router-dom"
import CardTrips from "../../../components/CardTrips/CardTrips"
import { BASE_URL } from "../../../constants"
import { goToForm, back } from "../../../Coordinator/Coordinator"
import useRequestData from "../../../hooks/useRequestData"
import { ConteinerBtn, ConteinerListTrip, ConteinerTrips,  } from "./styled"
import space from '../../../media/space.png'


const ListTrip = (props) => {
    const navigate = useNavigate()

    const trips = useRequestData(`${BASE_URL}/trips`)

    const renderTrips = trips && trips.map((trip) => {
        return <CardTrips
            key={trip.id}
            trip={trip}
        />
    })
    return (
        <ConteinerListTrip img={space}>
            <ConteinerBtn>
                <button onClick={() => back(navigate)}>voltar</button>
                <h1>LISTA DE VIAGENS</h1>
                <button onClick={() => goToForm(navigate)}>Inscrever-se</button>
            </ConteinerBtn>

            <ConteinerTrips>
                {renderTrips}
            </ConteinerTrips>

        </ConteinerListTrip>
    )
}

export default ListTrip