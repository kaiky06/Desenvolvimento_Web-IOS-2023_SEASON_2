import React from 'react'
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
  return (
    <div>
        <section>
            <h1 style={{color: 'red'}}>{props.nome}</h1>
            <p>Kaiky de Oliveira Silva</p>
        </section>
    </div>
  )
}

BoasVindas.defaultProps = {
    nome: 'Nome Padrão',
};
BoasVindas.propTypes = {
  nome: PropTypes.string,
}

export default BoasVindas