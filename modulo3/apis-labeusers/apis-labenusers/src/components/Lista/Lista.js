import React from "react";
import axios from 'axios'
import { CaixaItemLista, CaixaLista, Conteiner, ItemLista, Title } from "./styled";

const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


const headers = {
    headers: {
        Authorization: "walmir-junior-hooks"
    }
}

class Lista extends React.Component {

    state = {
        usersList: []

    }


    componentDidMount = () => {
        this.takeUserList()
    }


    takeUserList = () => {
        axios
            .get(urlApi, headers)
            .then((res) => {
                this.setState({ usersList: res.data })
            })
            .catch((err) => {
                alert('err')
            })
    }

    deleteUser = (id) => {
        axios
            .delete(`${urlApi}/${id}`, headers)
            .then((res) => {
                this.takeUserList()
                alert('usuario deletado')
            })
            .catch((err) => {
                alert('algo deu errado')
            })
    }

    render() {

        const usersRender = this.state.usersList.map((user) => {
            return (
                <CaixaLista key={user.id}>
                    <CaixaItemLista>
                        <ItemLista>
                            {user.name.toUpperCase()}
                        </ItemLista>
                    <button onClick={() => this.deleteUser(user.id)}>deletar</button>
                    </CaixaItemLista>
                </CaixaLista>

            )
        })

        return (
            <Conteiner>
                <div>
                    <Title>Usuarios</Title>
                    {usersRender}
                    <button onClick={() => { this.props.goBack('cadastro') }}>cadastro</button>
                </div>
            </Conteiner>
        );
    }
}

export default Lista;