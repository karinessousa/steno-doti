import '../App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';

function InicioLogado() {
  return (
    <div>
      <MenuLogado />
      <div className='inicioLogado'>
        
      </div>
      <Rodape/>
    </div>
  );
}

export default InicioLogado;