import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { back } from "../../../Coordinator/Coordinator"
import { BASE_URL, axiosConfig } from '../../../constants/index'
import space from "../../../media/space.png"
import { Conteiner, ConteinerForm, Form } from "../../../Pages/Public/ApplicationForm/styled"


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
            .then(() => alert(`${name} criada com sucesso!`))
            .catch(err => console.log(err))
    }
    return (

        <Conteiner img={space}>
            <h1> Criar viagem</h1>
            <ConteinerForm>

                <Form>
                    <button onClick={() => back(navigate)}>Voltar</button>
                    <input
                        placeholder="Nome da viagem"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />

                    <select
                        value={planet}
                        onChange={(event) => { setPlanet(event.target.value) }}
                    >
                        <option selected>Escolha um planeta</option>
                        <option>Mercurio</option>
                        <option>Saturno</option>
                        <option>Jupiter</option>
                        <option>Netuno</option>
                        <option>Urano</option>
                        <option>Marte</option>
                        <option>Plutão</option>
                        <option>Venus</option>
                    </select>

                    <input
                        placeholder="dd/mm/aaaa"
                        type="date"
                        value={date}
                        onChange={(event) => { setDate(event.target.value) }}
                    />
                    <input
                        placeholder="Descrição"
                        value={description}
                        onChange={(event) => { setDescripition(event.target.value) }}
                    />
                    <input
                        placeholder="Duração de dias"
                        value={duration}
                        onChange={(event) => { setDuration(event.target.value) }}
                    />

                    <button
                        type="submit"
                        onClick={addNewTrip}
                    >
                        Criar
                    </button>
                </Form>
            </ConteinerForm>
        </Conteiner>
    )
}

export default CreateTrip
