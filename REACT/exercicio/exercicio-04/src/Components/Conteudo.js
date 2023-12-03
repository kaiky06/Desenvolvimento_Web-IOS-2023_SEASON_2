import { useState } from 'react';
import './Conteudo.css';

const Conteudo = () => {
  const [contador, setContador] = useState(0);
  const [lido, setLido] = useState('');
  const [cor, setCor] = useState('black');

  const handleButtonClick = (avaliacao, novaCor) => {
    if (avaliacao === 'excellent') {
      setLido('Otimo');
    } else {
      setContador(avaliacao);
      setLido(''); 
    }

    setCor(novaCor);
  };

  return (
    <div className="conteudo-container">
      <article>
        <h2>IOS-Instituto da Oportunidade Social</h2>
        <p>JÁ PODE AVALIAR!</p>
        <div style={{ color: cor }}>
          <p>{lido || contador}</p>
          <button onClick={() => handleButtonClick('excellent', 'green')}>
            Otimo
          </button>
          <button onClick={() => handleButtonClick('good', 'blue')}>
            Bom
          </button>
          <button onClick={() => handleButtonClick('bad', 'orange')}>
            Ruim
          </button>
          <button onClick={() => handleButtonClick('Terrible', 'red')}>
            Pessimo
          </button>
        </div>
      </article>
    </div>
  );
};

export default Conteudo;
