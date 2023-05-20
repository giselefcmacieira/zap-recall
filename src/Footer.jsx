import styled from 'styled-components';

export default function Footer(props){
    const {cards, concluidas, setConcluidas} = props;
    const totalDeCards = cards.length;
    const totalDeConcluida = concluidas.length;
    return(
        <Rodape>
            <p data-test="footer">{totalDeConcluida}/{totalDeCards} CONCLUÍDOS</p>
        </Rodape>
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
`;