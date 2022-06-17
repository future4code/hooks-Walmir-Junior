import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToLogin } from "../../Coordinator/Coordinator";



const Home = (props) => {
    const navigate = useNavigate()
    return (
        <>
         <div>
            <h1>LABEX</h1>

            <h3>Boas vindas ao futuro!</h3>

            <button onClick={() => goToListTrip(navigate)} >Viagens</button>
            <button onClick={() => goToLogin(navigate)} >Sou ADM</button>
         </div>
        </>
    )
}

export default Home