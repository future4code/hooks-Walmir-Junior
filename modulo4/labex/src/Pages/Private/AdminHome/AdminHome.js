import React from "react";
import { useNavigate } from "react-router-dom";
import CardTripsAdm from "../../../components/CardTripsAdm/CardTripsAdm";
import { BASE_URL } from "../../../constants";
import { back, goToCreate, goToHome } from "../../../Coordinator/Coordinator";
import usePrivatePage from "../../../hooks/usePrivatePage";
import useRequestData from "../../../hooks/useRequestData"
import space from "../../../media/space.png"
import { CaixaCards, Conteiner, Painel, PainelBtn } from "./styled";


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
        <Conteiner img={space}>
            <Painel>
                <h1>Painel Administrativo</h1>

                <PainelBtn>
                    <button onClick={() => goToHome(navigate)}>Voltar</button>
                    <button onClick={() => goToCreate(navigate)}>Criar viagem</button>
                    <button onClick={() => back(navigate)}>logout</button>
                </PainelBtn>
            </Painel>
            <CaixaCards>
                {renderTripsAdm}
            </CaixaCards>
        </Conteiner>
    )
}

export default AdminHome