import React from "react";
import {ConteinerETP2, Pergunta5, Pergunta6, Input5, Input6} from './styled'

class Etapa2 extends React.Component {
    render() {
        return (
            <>
                <ConteinerETP2>
                    <h1>ETAPA 2 - INFORMAÇÔES DO ENSINO SUPERIOR</h1>

                    <Pergunta5>5. Qual curso?</Pergunta5>
                    <Input5/>

                    <Pergunta6>6. Qual a unidade de ensino?</Pergunta6>
                    <Input6/>
                </ConteinerETP2>
            </>
        );
    }
}

export default Etapa2