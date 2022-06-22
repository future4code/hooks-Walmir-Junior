import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { back } from "../../../Coordinator/Coordinator"
import {BASE_URL, axiosConfig} from '../../../constants/index'


const CreateTrip = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescripition] = useState('')
    const [duration, setDuration] = useState('')

    const addNewTrip = (event) => {
        event.preventDefault()

        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration
        }

        axios
        .post(`${BASE_URL}/trips`, body, axiosConfig)
        .then(res => alert('viagem criada!'))
        .catch(err => console.log(err))
    } 
    return (
        <>
            <div>
                <h1> Criar viagem</h1>

                <form>
                    <input 
                    placeholder="Nome da viagem"
                    value={name}
                    onChange={(event) => {setName(event.target.value)}} 
                    />

                    <select
                    value={planet}
                    onChange={(event) => {setPlanet(event.target.value)}}
                    >
                        <option selected disabled>Escolha um planeta</option>
                        <option>mercurio</option>
                        <option>saturno</option>
                        <option>jupiter</option>
                        <option>netuno</option>
                        <option>urano</option>
                    </select>

                    <input 
                    placeholder="dd/mm/aaaa" 
                    type="date"
                    value={date}
                    onChange={(event) => {setDate(event.target.value)}}
                    />
                    <input 
                    placeholder="Descrição" 
                    value={description}
                    onChange={(event) => {setDescripition(event.target.value)}}
                    />
                    <input 
                    placeholder="Duração de dias"
                    value={duration}
                    onChange={(event) => {setDuration(event.target.value)}}
                    />
                </form>

                <div>
                    <button onClick={() => back(navigate)}>Voltar</button>

                    <button 
                    type="submit" 
                    onClick={addNewTrip}
                    >
                    Criar
                    </button>
                </div>

            </div>
        </>
    )
}

export default CreateTrip
