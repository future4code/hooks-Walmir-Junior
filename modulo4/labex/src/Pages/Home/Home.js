import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrip, goToLogin } from "../../Coordinator/Coordinator";
import labex from '../../media/labex-logo.png'
import space from '../../media/space.png'
import { Conteiner, ConteinerBtns, ConteinerLogo, Logo } from "./styled";



const Home = (props) => {
    const navigate = useNavigate()
    return (
        <Conteiner img={space}>
            <ConteinerLogo>
                <Logo src={labex} alt="logo" />
            </ConteinerLogo>

            <h3>Boas vindas ao futuro!</h3>
            <ConteinerBtns>
                <button onClick={() => goToListTrip(navigate)} >Viagens</button>
                <button onClick={() => goToLogin(navigate)} >Sou ADM</button>
            </ConteinerBtns>
        </Conteiner>
    )
}

export default Home