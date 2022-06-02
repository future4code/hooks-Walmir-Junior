import React from 'react'
import './App.css'
import Cadastro from './components/Cadastro/Cadastro';
import Lista from './components/Lista/Lista';

class App extends React.Component{

  state={
    renderPag: "cadastro"
  }

  changePag = () => {
    if(this.state.renderPag === "cadastro"){
      return  <Cadastro goBack={this.goBack}/>
    } else if (this.state.renderPag === "lista"){
      return <Lista goBack={this.goBack}/>
    }
  }

  goBack = (renderPag) => {
    this.setState({renderPag: renderPag})
  }

  render() {

    return (
      <div>
        {this.changePag()}
      </div>
    );
  }
}

export default App
