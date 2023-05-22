import styled from 'styled-components';
import IconesConcluidos from './icones-concluidos';

export default function Footer(props){
    const {cards, concluidas, setConcluidas} = props;
    const totalDeCards = cards.length;
    const totalDeConcluida = concluidas.length;
    console.log(concluidas);
    return(
        <>
        <Rodape>
            <p data-test="footer">{totalDeConcluida}/{totalDeCards} CONCLUÍDOS</p>
            <div>{concluidas.map(concluida => <IconesConcluidos src={concluida.img} dataTest={concluida.dataTest}/>)}</div>
        </Rodape>
        
        </>
    );
}

const Rodape = styled.div`
    width: 100%;
    height: 70px;
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
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;