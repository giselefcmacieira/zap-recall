import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import FlashContainer from './Flash-container';
import cards from './infoDeck';
import { useState } from 'react';

export default function Deck(){
    const [concluidas, setConcluidas] = useState([]);
    return(
        <Deckk>
            <Header/>
            <FlashContainer cards={cards} 
            concluidas={concluidas} setConcluidas={setConcluidas}/>
            <Footer cards={cards} 
            concluidas={concluidas} setConcluidas={setConcluidas}
            />
        </Deckk>
    );
}

const Deckk = styled.div`
    width: 100%;
    height: 100%;
    background: #FB6B6B;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
