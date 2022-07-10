import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { back } from "../../../Coordinator/Coordinator";
import { axiosConfig, BASE_URL } from "../../../constants";
import axios from "axios";

const TripDetails = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [tripDetails, setTripDetails] = useState({})
    

    useEffect(() => {
        axios
        .get(`${BASE_URL}/trip/${params.id}`, axiosConfig)
        .then((res) => {
            console.log(res.data.trip)
            setTripDetails(res.data.trip)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <>
        <button onClick={() => back(navigate)}>Voltar</button>
        <h1>{tripDetails.name}</h1>
        </>
    )
}

export default TripDetails