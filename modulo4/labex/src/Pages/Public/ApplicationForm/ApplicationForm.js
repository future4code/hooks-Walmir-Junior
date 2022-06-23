import React from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../../constants"
import { back } from "../../../Coordinator/Coordinator"
import useCountries from "../../../hooks/useCountries"
import useRequestData from "../../../hooks/useRequestData"

const ApplicationForm = () => {
    const navigate = useNavigate()
    const trips = useRequestData(`${BASE_URL}/trips`)
    const getCountries = useCountries()

    const renderTripsOption = trips && trips.map((trip) => {
        return <option key={trip.id}>{trip.name}</option>
    })

    const renderCountriesOption = getCountries.map((country) => {
        return <option key={country.nome_pais}>{country.nome_pais}</option>
    })
    return (
        <div>
            <button onClick={() => back(navigate)}>voltar</button>
            <div>
                <form>
                    <select required>
                        <option selected>Escolha uma viagem</option>
                        {renderTripsOption}
                    </select>

                    <input placeholder="nome" required />

                    <input placeholder="idade" type="number" required/>

                    <input placeholder="Texto de candidatura" required/>

                    <input placeholder="Profissão" required/>

                    <select required>
                        <option selected>Selecione seu país</option>
                        {renderCountriesOption}
                    </select>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ApplicationForm