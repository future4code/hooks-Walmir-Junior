import React from 'react'
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';
import Etapa4 from './Components/Etapa4/Etapa4';
import { Botao } from './Components/Botao/Botao';

class App extends React.Component {

  state = {
    etapa: 1
  }

  mudaEtapa = () => {
    this.setState({etapa: this.state.etapa +1})
  }
    

  imprimeEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3/>

      case 4: 
        return <Etapa4/> 
      
      default:
        return <h1>Pagina não encontrada</h1>   
    }

  }

  render() {
    return (
      <>
        {this.imprimeEtapa()}
        <Botao onClick={this.mudaEtapa()}>Proxima etapa</Botao>
      </>
    );
  }
}

export default App;
