import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../../constants"
import { back } from "../../../Coordinator/Coordinator"
import useRequestData from "../../../hooks/useRequestData"

const ApplicationForm = () => {
    const navigate = useNavigate()
    const trips = useRequestData(`${BASE_URL}/trips`)

    const [countries, setCountries] = useState([])

useEffect(() => {
    axios
    .get('https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json')
    .then((res) => {
        console.log(res.data)
        setCountries(res.data)
    })
    .catch(err =>  console.log(err.data))
}, [])
  

    const renderTripsOption = trips && trips.map((trip) => {
        return <option key={trip.id}>{trip.name}</option>
    })

    const renderCountriesOption = countries.map((country,i)=>{
        return <li key={country.i}>{country.data}</li>
    }) 
    return (
        <>
            <button onClick={() => back(navigate)}>voltar</button>
            <div>
                <form>
                    <select>
                        <option selected disabled>Escolha uma viagem</option>
                         {renderTripsOption} 
                    </select>

                    <input placeholder="nome" />

                    <input placeholder="idade" type="number" />

                    <input placeholder="Texto de candidatura" />

                    <input placeholder="Profissão" />

                    <select>
                        <option selected disabled>Selecione seu país</option>
                        
                    </select>
                    {renderCountriesOption}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default ApplicationForm