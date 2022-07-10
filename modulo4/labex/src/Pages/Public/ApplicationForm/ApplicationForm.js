import axios from "axios"
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../../constants"
import { back } from "../../../Coordinator/Coordinator"
import useCountries from "../../../hooks/useCountries"
import useRequestData from "../../../hooks/useRequestData"
import space from "../../../media/space.png"
import { Conteiner, ConteinerForm,Form } from "./styled"

const ApplicationForm = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [travel] = useState(params.name)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')


    const applyToTrip = () => {

        const body = {
            name,
            age,
            applicationText, 
            profession,
            country
        }

        // const header = 'Content-Type: application/json' 

        axios
        .post(`${BASE_URL}/trips/${params.id}/apply`,body)
        .then(res => console.log(res.data))
        .catch(err => console.log( err))
    }


// =================== options ==========================    
    const trips = useRequestData(`${BASE_URL}/trips`)
    const getCountries = useCountries()

    const renderTripsOption = trips && trips.map((trip) => {
        return <option key={trip.id}>{trip.name}</option>
    })

    const renderCountriesOption = getCountries.map((country) => {
        return <option key={country.nome_pais}>{country.nome_pais}</option>
    })
    return (
        <Conteiner img={space}>
            <ConteinerForm>
                <Form>
            <button onClick={() => back(navigate)}>voltar</button>
                    <select 
                    required
                    >
                        <option selected>{travel}</option>
                        {renderTripsOption}
                    </select>

                    <input 
                    placeholder="nome" 
                    required
                    value={name}
                    onChange={(event) =>{setName(event.target.value)}} 
                    />

                    <input 
                    placeholder="idade" 
                    type="number" 
                    required
                    value={age}
                    onChange={(event) =>{setAge(event.target.value)}}
                    />

                    <input 
                    placeholder="Texto de candidatura" 
                    required
                    value={applicationText}
                    onChange={(event) =>{setApplicationText(event.target.value)}}
                    />

                    <input 
                    placeholder="Profissão" 
                    required
                    value={profession}
                    onChange={(event) =>{setProfession(event.target.value)}}
                    />

                    <select 
                    required
                    value={country}
                    onChange={(event) =>{setCountry(event.target.value)}}
                    >
                        <option selected>Selecione seu país</option>
                        {renderCountriesOption}
                    </select>

                    <button 
                    type="submit"
                    onClick={applyToTrip}
                    >
                    Enviar
                    </button>
                </Form>
            </ConteinerForm>
        </Conteiner>
    )
}

export default ApplicationForm