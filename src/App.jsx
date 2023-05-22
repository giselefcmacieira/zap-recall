import { useState } from "react";
import Deck from "./Deck.jsx"
import "./reset.css";
import TelaInicial from "./Tela-inicial.jsx";

function App() {
  const [iniciarDeck, setIniciarDeck] = useState(false);
  return (
    <>
      {iniciarDeck ? <Deck/> : <TelaInicial iniciarDeck={iniciarDeck} setIniciarDeck={setIniciarDeck}/>}
    </>
  )
}

export default App
