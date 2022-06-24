import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CardTrips from "../../../components/CardTrips/CardTrips"
import { BASE_URL } from "../../../constants"
import { back } from "../../../Coordinator/Coordinator"
import useRequestData from "../../../hooks/useRequestData"
import { ConteinerBtn, ConteinerListTrip, ConteinerTrips, } from "./styled"
import space from '../../../media/space.png'


const ListTrip = (props) => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const trips = useRequestData(`${BASE_URL}/trips`)

    const renderTrips = trips && trips.filter((trip) => {
        return trip.name.toLowerCase().includes(query.toLowerCase()) || trip.description.toLowerCase().includes(query.toLowerCase())
    }).map((trip) => {
        return <CardTrips
            key={trip.id}
            trip={trip}
        />
    })
    

    return (
        <ConteinerListTrip img={space}>
            <ConteinerBtn>
                <button onClick={() => back(navigate)}>voltar</button>
                <div>
                    <h1>LISTA DE VIAGENS</h1>
                    <input
                        type="search"
                        placeholder="Pesquisar..."
                        value={query}
                        onChange={(event) => { setQuery(event.target.value) }}
                    />
                    
                </div>
                
            </ConteinerBtn>

            <ConteinerTrips>
                {renderTrips}
            </ConteinerTrips>

        </ConteinerListTrip>
    )
}

export default ListTrip