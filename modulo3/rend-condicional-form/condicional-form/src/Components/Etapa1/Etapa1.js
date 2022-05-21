import React from 'react'
import { ConteinerETP1,Pergunta1, Pergunta2, Pergunta3, Pergunta4, Input1, Input2, Input3, Input4} from './styled'

class Etapa1 extends React.Component {
    render() {
        return (
            <ConteinerETP1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <Pergunta1>1. Qual o seu nome?</Pergunta1>
                <Input1/>

                <Pergunta2>2. Qual sua idade</Pergunta2>
                <Input2/>

                <Pergunta3>3. Qual seu email?</Pergunta3>
                <Input3/>

                <Pergunta4>4. Qual sua escolaridade</Pergunta4>
                <Input4>
                    <option>Ensino médio incmpleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </Input4>
            </ConteinerETP1>
        )
    }
}

export default Etapa1