import styled from 'styled-components'

export const Conteiner = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-image: url(${props => props.img});
    
`

export const Painel = styled.div`
     color: #fed34f;
     display: flex;
     flex-direction: column;
     text-align: center;
     
     h1{
         margin-top: 5%;
         font-family: Arial, Helvetica, sans-serif;
     }

`
export const PainelBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 6%;
margin-bottom: 5%;

button {
    background-color: #0a6bff;
    border-radius: 4px;
    border: 0;
    box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inherit;
    font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    min-height: 56px;
    min-width: 120px;
    padding: 16px 20px;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    transition: all .2s cubic-bezier(.22, .61, .36, 1);
    }

    button:hover {
    background-color: #065dd8;
    transform: translateY(-2px);
    box-shadow: 2px 10px 50px white;

}

@media (min-width: 768px) {
  button {
    padding: 16px 44px;
    min-width: 150px;
  }
}
`

export const CaixaCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
   
`