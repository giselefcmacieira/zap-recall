import styled from 'styled-components';
import logo from './assets/logo.png';

export default function Header(){
    return(
        <Cabecalho>
            <img src = {logo}/>
            <p>ZapRecall</p>
        </Cabecalho>
    );
}

const Cabecalho = styled.div`
  background: #FB6B6B;
  margin: 0 auto;
  width: 100%;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 4;
  img{
    width: 52px;
    height: 60px;
    margin-right: 10px;
  } 
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
  }
`;