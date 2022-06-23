import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import {axiosConfig, BASE_URL} from '../../constants/index'
// import useRequestData from "../../hooks/useRequestData"



const CardTripsAdm = (props) => {
   const navigate = useNavigate()

    const deleteTrip = (id) => {
        

        axios
        .delete(`${BASE_URL}/trips/${id}`, axiosConfig)
        .then(() => {
            alert(`${props.trip.name}, deletada!`)
        //    useRequestData(`${BASE_URL}/trips`)
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h3>{props.trip.name}</h3>
            <p>{props.trip.description}</p>
            <h4>{props.trip.planet}</h4>
            <p>{props.trip.date}</p>

            <button onClick={() => deleteTrip(props.trip.id)}>delete</button>
            <button 
            onClick={() => {navigate(`/tripDetails/${props.trip.id}`)}}
            >
            detalhes
            </button>
            <hr />
        </div>
    )
}

export default CardTripsAdm