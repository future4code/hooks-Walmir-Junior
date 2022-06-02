import styled from 'styled-components'

export const Conteiner = styled.div`
     width: 60vw;
    height: 60vh;
    margin: 0 auto;
    padding: 15px;
   

    text-align: center;
   

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    h1 {

        margin-bottom: 30%;
    }


`
export const Title = styled.h1`

`
export const CaixaLista = styled.div`
    display: flex;
   flex-direction: column;
`
export const CaixaItemLista = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    border: 1px solid black;
    margin-bottom: 6%;
`
export const ItemLista = styled.p`
    font-weight: bold;
    text-decoration: underline;
`