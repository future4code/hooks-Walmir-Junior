import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: url(${props => props.img});

    height: 100vh;
`

export const Logo = styled.img`
    border-radius: 50%;
    box-shadow: 2px 10px 50px white;
    width: 500px;
`

export const ConteinerLogin = styled.div`

    display: flex;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
   

    input {
        display: block;
        margin: 10%;
        padding: 15px;
        font-size: 29px;
        border-width: 1px;
        border-color: #CCCCCC;
        background-color: #FFFFFF;
        color: #000000;
        border-style: solid;
        border-radius: 43px;
        box-shadow: 0px 0px 5px rgba(255,255,255,.75);
        text-shadow: -50px 0px 0px rgba(66,66,66,.0);
        }
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

