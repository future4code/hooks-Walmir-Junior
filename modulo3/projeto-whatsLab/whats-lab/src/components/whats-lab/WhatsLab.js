import React from 'react'
import "./WhastsLab.css"
// import styled from 'styled-components'



// const BoxMensage = styled.div`
//   background-color: #fff;
// `

class WhatsLab extends React.Component {

  state = {
    userName: '',
    mensage: '',
    listMensage: [
      { user:'', mensage:''}
    ]
  }

  changeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  changeMensage = (event) => {
    this.setState({ mensage: event.target.value })
  }

  newMensageSended = () => {
    const novaMensagem = {
      user: this.state.userName,
      mensage: this.state.mensage
    }

    const newListMensage = [...this.state.listMensage]
    newListMensage.push(novaMensagem)

    this.setState({listMensage: newListMensage})
    this.setState({ userName: '', mensage: '' })
  }

  render() {

   const newMensage = this.state.listMensage.map((msg) => {
      return (
        <div className='box-chat'>
          <p><strong>{msg.user}</strong></p>
          <p>{msg.mensage}</p>
        </div>
      )
    })

    console.log(this.state.listMensage)
    // console.log(this.newMensage)

    return (
      <div className="screen">
        <div className="base-chat">
          <div className="background-chat">
            <div className="chat-area">
                {newMensage}
            </div>
          </div>
          <div className="mensage-area">
            <div className="input-user">
              <input placeholder="Usuario" value={this.state.user} onChange={this.changeUserName} />
            </div>
            <div className="input-mensage">
              <input placeholder="Digite sua mensagem aqui!" value={this.state.mensage} onChange={this.changeMensage} />
              <button onClick={this.newMensageSended}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhatsLab