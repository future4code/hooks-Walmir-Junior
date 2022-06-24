import styled from 'styled-components'

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 70%;
    max-width: 70%;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    background-image: url(${prosps => prosps.img});
    border: solid 1px #fed34f;

    :hover{
        box-shadow: 2px 10px 50px white;
        cursor: pointer;
    } 
  
    
`
export const ConteinerTrip = styled.div`
     width: 50%;
     padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    color: #fed34f;

`
export const ConteinerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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