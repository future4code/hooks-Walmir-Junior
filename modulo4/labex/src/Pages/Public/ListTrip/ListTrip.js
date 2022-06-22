import React from "react"
import { useNavigate } from "react-router-dom"
import CardTrips from "../../../components/CardTrips/CardTrips"
import { BASE_URL } from "../../../constants"
import { goToForm, back } from "../../../Coordinator/Coordinator"
import useRequestData from "../../../hooks/useRequestData"


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
        <>
            <button onClick={() => back(navigate)}>voltar</button>
            <button onClick={() => goToForm(navigate)}>Inscrever-se</button>

            {renderTrips}
        </>
    )
}

export default ListTrip