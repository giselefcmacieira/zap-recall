import styled from 'styled-components';
import IconesConcluidos from './icones-concluidos';
import { useState } from 'react';
import party from './assets/party.png';
import sad from './assets/sad.png';

export default function Footer(props){
    const {cards, concluidas, setConcluidas, finalizado, setFinalizado, contador, setContador} = props;
    const totalDeCards = cards.length;
    const totalDeConcluida = concluidas.length;
    let mensagem = '';
    let srcImg = '';

    console.log(finalizado);
    if(totalDeCards === totalDeConcluida && contador === 0){
        mensagem = 'Acertou tudo!!';
        srcImg = party;
    }else if(totalDeCards === totalDeConcluida && contador > 0){
        mensagem = 'Foi quase!!';
        srcImg = sad;
    }else if(totalDeCards !== totalDeConcluida){
        mensagem = '';
        srcImg = '';
    }

    return(
        <>
        <Rodape data-test="footer" totalDeConcluida={totalDeConcluida} totalDeCards={totalDeCards}>
            <p>{mensagem}</p>
            <img src={srcImg}/>
            <p>{totalDeConcluida}/{totalDeCards} CONCLUÍDOS</p>
            <div>{concluidas.map(concluida => <IconesConcluidos src={concluida.img} dataTest={concluida.dataTest}/>)}</div>
        </Rodape>
        
        </>
    );
}

const Rodape = styled.div`
    width: 100%;
    height: ${props => props.totalDeConcluida === props.totalDeCards ? '171px' : '70px'};
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        display: inline;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    img{
        display: inline;
    }
`;