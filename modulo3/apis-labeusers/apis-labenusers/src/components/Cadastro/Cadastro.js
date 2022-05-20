import React from 'react'
import {CaixaForm, Conteiner, Email, Nome, Title} from './styled'
import axios from 'axios'

const urlApi = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


const headers = {
    headers: {
        Authorization: "walmir-junior-hooks"
    }
}

class Cadastro extends React.Component {
    state = {
        email: '',
        usuario: '',
        usersList: []

    }

    componentDidMount = () => {
        this.takeUserList()
    }

    upDateEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    upDateUser = (event) => {
        this.setState({ usuario: event.target.value })
    }

    clickBTN = () => {
        this.createNewUser()
        this.setState({ email: '', usuario: '' })
    }

    createNewUser = () => {
        const body = {
            name: this.state.usuario,
            email: this.state.email
        }
        axios
            .post(urlApi, body, headers)
            .then((res) => {
                this.takeUserList()
                alert(` Boas vindas ${res.name} `)
                console.log(res)
            })
            .catch((err) => {
                alert('erro')
                console.log(err.message)
            })
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

    render() {

        return (
            <>
                <Conteiner>

                    <Title>Cadastro</Title>

                    <CaixaForm>

                        <Email
                            value={this.state.email}
                            placeholder='E-mail...'
                            onChange={this.upDateEmail}
                        />

                        <Nome
                            value={this.state.usuario}
                            placeholder='Usuario...'
                            onChange={this.upDateUser}
                        />

                        <button
                            onClick={this.clickBTN}
                        >
                            Cadastrar
                        </button>


                    </CaixaForm>

                    <div>
                        <button onClick={() => { this.props.goBack('lista') }}>lista</button>
                    </div>
                </Conteiner>

            </>
        )
    }
}

export default Cadastro