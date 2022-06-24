import styled from 'styled-components'

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.img});
    color: #fed34f ;

    min-height: 100vh;
    min-width: 100vw;
   
`

export const ConteinerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 90vh;
    margin-top: 1px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);

    input {
    margin: 15px 0 ;
     padding: 7px;
     font-size: 22px;
     border-width: 2px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: hidden;
     border-radius: 36px;
     box-shadow: -7px 0px 16px rgba(0,0,0,.52);
     text-shadow: 0px 0px 5px rgba(66,66,66,.0);
    }
    select {
    margin: 15px 0 ;   
     padding: 7px;
     font-size: 20px;
     border-width: 2px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: hidden;
     border-radius: 36px;
     box-shadow: -7px 0px 16px rgba(0,0,0,.52);
     text-shadow: 0px 0px 5px rgba(66,66,66,.0);
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

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    
    min-height: 100vh;
    min-width: 100vw;
    input {
    margin: 15px 0 ;
     padding: 7px;
     font-size: 22px;
     border-width: 2px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: hidden;
     border-radius: 36px;
     box-shadow: -7px 0px 16px rgba(0,0,0,.52);
     text-shadow: 0px 0px 5px rgba(66,66,66,.0);
    }
    select {
    margin: 15px 0 ;   
     padding: 7px;
     font-size: 20px;
     border-width: 2px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: hidden;
     border-radius: 36px;
     box-shadow: -7px 0px 16px rgba(0,0,0,.52);
     text-shadow: 0px 0px 5px rgba(66,66,66,.0);
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