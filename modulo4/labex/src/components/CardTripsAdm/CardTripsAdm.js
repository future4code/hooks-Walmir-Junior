import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { axiosConfig, BASE_URL } from '../../constants/index'
import { Conteiner, ConteinerBtn, ConteinerTrip } from "./styled"
import space from "../../media/space.png"



const CardTripsAdm = (props) => {
    const navigate = useNavigate()

    const deleteTrip = (id) => {


        axios
            .delete(`${BASE_URL}/trips/${id}`, axiosConfig)
            .then(() => {
                alert(`${props.trip.name}, deletada!`)
                
            })
            .catch(err => console.log(err))
    }
    return (
        <Conteiner imh={space}  onClick={() => { navigate(`/tripDetails/${props.trip.id}`) }}>
            <ConteinerTrip>
                <h3>{props.trip.name}</h3>
            </ConteinerTrip>

            <ConteinerBtn>

                <button onClick={() => deleteTrip(props.trip.id)}>delete</button>

            </ConteinerBtn>

        </Conteiner>
    )
}

export default CardTripsAdm