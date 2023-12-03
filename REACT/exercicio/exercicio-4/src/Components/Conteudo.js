import { useState } from 'react';
import './Conteudo.css'; 

const Conteudo = () => {
  const [contador, setContador] = useState('');
  const [lido, setLido] = useState('');
  const [feedback, setFeedback] = useState('');

  const mensagens = {
    good: 'Bom',
    bad: 'Ruim',
    terrible: 'Péssimo',
  };

  const handleLidoClick = () => {
    setLido('excellent');
    setFeedback('excellent-feedback');
  };

  const handleBomClick = () => {
    setContador('good');
    setFeedback('good-feedback');
  };

  const handleRuimClick = () => {
    setContador('bad');
    setFeedback('bad-feedback');
  };

  const handlePessimoClick = () => {
    setContador('terrible');
    setFeedback('terrible-feedback');
  };

  return (
    <div>
      <article>
        <h2>IOS-Instituto da Oportunidade Social</h2>
        <p>JÁ PODE AVALIAR</p>
        <div>
          <p className={feedback}>{lido && mensagens[lido]}{contador && mensagens[contador]}</p>
          <button onClick={handleLidoClick}>
            Ótimo
          </button>
          <button onClick={handleBomClick}>
            Bom
          </button>
          <button onClick={handleRuimClick}>
            Ruim
          </button>
          <button onClick={handlePessimoClick}>
            Péssimo   
          </button>
        </div>
      </article>
    </div>
  );
};

export default Conteudo;
