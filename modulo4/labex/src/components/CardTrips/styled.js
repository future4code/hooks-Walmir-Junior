import styled from 'styled-components'

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 80%;
    max-width: 80%;

    border: solid 1px #fed34f;
    margin-bottom: 10px;
    padding: 10px;
    color: #fed34f;
    background-image: url(${prosps => prosps.img});
    
    :hover{
        box-shadow: 2px 10px 50px white;
    } 
`
export const ConteinerTrip = styled.div`
     width: 50%;
     padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
`
export const ConteinerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background-color: #1e90ff;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 10px;
        width: 100px;
        cursor: pointer;
    }

    button:hover{
        background-color: #b0c4de;
        transition: 0.2s;
    }
`