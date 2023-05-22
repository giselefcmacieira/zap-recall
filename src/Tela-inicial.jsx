import styled from 'styled-components';
import logoo from './assets/logo.png';

export default function TelaInicial(props){
    const {iniciarDeck, setIniciarDeck} = props;
    function abrirDeck(){
        setIniciarDeck(true);
    }
    return(
        <>
            <Inicio>
            <img src={logoo}/>
            <p>ZapRecall</p>
            <BotaoIniciarDeck data-test="start-btn" onClick={abrirDeck}>Iniciar Recall!</BotaoIniciarDeck>
            </Inicio>
        </>
    );
}

const Inicio = styled.div`
    background-color: #FB6B6B;
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin-left: 10px;
    margin-top: 13px;
    margin-bottom: 30px;
  }
`;
const BotaoIniciarDeck = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
`;