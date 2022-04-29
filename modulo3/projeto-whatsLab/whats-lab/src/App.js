import React from "react";
import Screen from './components/Screen'
import BaseChat from './components/BaseChat'
import BackgroundChat from './components/BackgroundChat'
import './App.css';



function App() {
  return (
    <Screen>
      <BaseChat>
        <BackgroundChat>
          <div className="chat-area">

          </div>
        </BackgroundChat>
        <div className="mensage-area">
          <div className="input-user">
            <input type={'text'} placeholder="Usuario"/>
          </div>
          <div className="input-mensage">
            <input type={'text'} placeholder="Digite sua mensagem aqui!"/>
            <button type="submit" value={'send'}>Enviar</button>
          </div>
        </div>
      </BaseChat>
    </Screen>
  );
}

export default App;
