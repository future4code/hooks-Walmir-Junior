import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardTripsAdm from "../../../components/CardTripsAdm/CardTripsAdm";
import { axiosConfig, BASE_URL } from "../../../constants";
import { back, goToCreate, goToHome } from "../../../Coordinator/Coordinator";
import usePrivatePage from "../../../hooks/usePrivatePage";
import useRequestData from "../../../hooks/useRequestData"


const AdminHome = (props) => {
    const navigate = useNavigate()
    const trips = useRequestData(`${BASE_URL}/trips`)
    usePrivatePage()




    const renderTripsAdm = trips && trips.map((trip) => {
        return <CardTripsAdm
            key={trip.id}
            trip={trip}
        />
    })





    return (
        <>
            <h1>Boas vindas!</h1>
            <h2>Painel Administrativo</h2>

            <button onClick={() => goToHome(navigate)}>Voltar</button>
            <button onClick={() => goToCreate(navigate)}>Criar viagem</button>
            <button onClick={() => back(navigate)}>logout</button>

            {renderTripsAdm}
        </>
    )
}

export default AdminHome