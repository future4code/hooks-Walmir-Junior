import React from "react"
import { useNavigate } from "react-router-dom"
import { goToForm, back } from "../../../Coordinator/Coordinator"
import useRequestData from "../../../hooks/useRequestData"


const ListTrip = () => {
    const navigate = useNavigate()

    const trips = useRequestData("https://us-central1-missao-newton.cloudfunctions.net/futureX/darvas/trips")

    const renderTrips = trips && trips.map((trip) => {
        return (
            <div key={trip.id}>
                <div key={trip.id}>
                    <p>{trip.name}</p>
                    <p>{trip.description}</p>
                    <p>{trip.planet}</p>
                    <p>{trip.date}</p>
                </div>
                <hr />
            </div>
        )
    })
    return (
        <>
            <button onClick={() => goToForm(navigate)}>Inscrever-se</button>
            <button onClick={() => back(navigate)}>voltar</button>

            {renderTrips}
        </>
    )
}

export default ListTrip