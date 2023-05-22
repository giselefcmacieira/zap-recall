import styled from 'styled-components';
import playimg from './assets/seta_play.png';
import virar from './assets/seta_virar.png';
import certo from './assets/icone_certo.png';
import quase from './assets/icone_quase.png';
import erro from './assets/icone_erro.png';
import { useState } from 'react';

export default function FlashCard(props){
    const {card, concluidas, setConcluidas} = props;

    const [textoCard, setTextoCard] = useState(`Pergunta ${card.id}`);

    const [textDecoration, setTextDecoration] = useState('none');

    const [textColor, setTextColor] = useState('#333333');

    const [corCard, setCorCard] = useState('#FFFFFF');

    const [heightCard, setHeightCard] = useState('65px');

    const [displayBotoes, setDisplayBotoes] = useState('none');

    const [displayImg, setDisplayImg] = useState('');

    const [positionImg, setPositionImg] = useState('none');

    const [imgEmDisplay, setimgEmDisplay] = useState('play');


    function darPlay(){

        setTextoCard(`${card.question}`);
        setCorCard('#FFFFD4');
        setHeightCard('131px');
        setPositionImg('absolute');
        setimgEmDisplay('setinha');
    }

    function virarCarta(){

        setTextoCard(`${card.answer}`);
        setDisplayBotoes('flex');
        setDisplayImg('none');
        setPositionImg('none');
    }

    function naoLembrou(){

        setTextoCard(`Pergunta ${card.id}`);
        setTextDecoration('line-through');
        setTextColor('red');
        setCorCard('#FFFFFF');
        setHeightCard('65px');
        setDisplayBotoes('none');
        setDisplayImg('');
        setimgEmDisplay('icone-errado');

        const novaArray = [...concluidas];
        novaArray.push({img: erro, dataTest: "no-icon"});
        setConcluidas(novaArray);
    }

    function quaseEsqueceuu(){

        setTextoCard(`Pergunta ${card.id}`);
        setTextDecoration('line-through');
        setTextColor('#FF922E');
        setCorCard('#FFFFFF');
        setHeightCard('65px');
        setDisplayBotoes('none');
        setDisplayImg('');
        setimgEmDisplay('icone-quase');

        const novaArray = [...concluidas];
        novaArray.push({img: quase, dataTest: "partial-icon"});
        setConcluidas(novaArray);
    }

    function lembrouu(){

        setTextoCard(`Pergunta ${card.id}`);
        setTextDecoration('line-through');
        setTextColor('#2FBE34');
        setCorCard('#FFFFFF');
        setHeightCard('65px');
        setDisplayBotoes('none');
        setDisplayImg('');
        setimgEmDisplay('zap');

        const novaArray = [...concluidas];
        novaArray.push({img: certo, dataTest: "zap-icon"});
        setConcluidas(novaArray);
    }

    return(
        <> 
        <FlashCardd data-test="flashcard" corCard={corCard} heightCard={heightCard} displayBotoes={displayBotoes} textDecoration={textDecoration} textColor={textColor} displayImg={displayImg} positionImg={positionImg}>
            <p data-test="flashcard-text">{textoCard}</p>
            {imgEmDisplay === 'play' ? <img data-test="play-btn" onClick={darPlay} src={playimg} /> : ''}
            {imgEmDisplay === 'setinha' ? <img data-test="turn-btn" onClick={virarCarta} src={virar}/> : '' }
            {imgEmDisplay === 'icone-errado' ? <img data-test="no-icon" src={erro}/> : ''}
            {imgEmDisplay === 'icone-quase' ? <img data-test="partial-icon" src={quase}/> : ''}
            {imgEmDisplay === 'zap' ? <img data-test="zap-icon" src={certo}/> : ''}
            <div>
                <BotaoNaoLembrei data-test="no-btn" onClick={() => naoLembrou(card.id)}>Não Lembrei</BotaoNaoLembrei>
                <BotaoQuaseNaoLembrei data-test="partial-btn" onClick={() => quaseEsqueceuu(card.id)}>Quase não lembrei</BotaoQuaseNaoLembrei>
                <Zap data-test="zap-btn" onClick={() => lembrouu(card.id)}>Zap!</Zap>
            </div>
        </FlashCardd>
        </>
    );
}

const FlashCardd = styled.div`
    width: 100%;
    height: ${props => props.heightCard};
    background-color: ${props => props.corCard};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 22px 15px 15px 15px;
    margin-bottom: 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    p{
        font-family: 'Recursive';
        text-decoration: ${props => props.textDecoration};
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.textColor};
    }
    img{
        width: 20px;
        height: 20px;
        position: ${props => props.positionImg};
        bottom: 6px;
        right: 15px;
        display: ${props => props.displayImg}
    }
    div{
        display: ${props => props.displayBotoes};
        justify-content: space-around;
        position: absolute;
        bottom: 10px;
        left: 0px;
        height: 37px;
        width: 100%;
    }
`;

const BotaoNaoLembrei = styled.button`
    width: 85px;
    height: 37px;
    background-color: #FF3030;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    border-radius: 5px;
`;
const BotaoQuaseNaoLembrei = styled(BotaoNaoLembrei)`
    background-color: #FF922E;
`;
const Zap = styled(BotaoNaoLembrei)`
    background-color: #2FBE34;
`;