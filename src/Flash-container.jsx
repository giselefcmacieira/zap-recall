import styled from 'styled-components';
import FlashCard from './Flash-card';

export default function FlashContainer(props){
    const {cards, concluidas, setConcluidas, finalizado, setFinalizado, contador, setContador} = props;
    return(
        <ContainerCards>
            {cards.map(card => <FlashCard cards={cards} concluidas={concluidas} setConcluidas={setConcluidas} finalizado={finalizado} setFinalizado={setFinalizado} contador={contador} setContador={setContador} key={card.id} card={card}/>)}
        </ContainerCards>
    );
}

const ContainerCards = styled.div`
    width: 100%;
    margin-top: 145px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 37px 0 37px;
    background-color: #FB6B6B;
`;