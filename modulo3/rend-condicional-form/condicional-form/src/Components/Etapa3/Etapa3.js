import React from "react";
import {ConteinerETP3, Pergunta7, Pergunta8, Input7, Input8} from './styled'



class Etapa3 extends React.Component {
    render() {
        return (
            <>
                <ConteinerETP3>
                    <h1>ETAPA 3 - INFORMAÇÔES GERAIS DE ENSINO</h1>

                    <Pergunta7>7. Por que você não terminou o curso de graduação</Pergunta7>
                    <Input7/>

                    <Pergunta8>8. Você fez algum curso complementar</Pergunta8>
                    <Input8>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>curso de inglês</option>
                    </Input8>
                </ConteinerETP3>
            </>
        );
    }
}

export default Etapa3