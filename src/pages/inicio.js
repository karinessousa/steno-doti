import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../components/menu';
import Rodape from '../components/rodape';

function Inicio() {
  return (
    <div>
      <Menu />
      <div className='painelInicial'>
        <ul>
          <li><h3>Ambiente digital gamificado para organização e otimização de times de<br/> 
          desenvolvimento de software</h3></li>
          <li>
            <Link to="/cadastro">
              <button className="buttonVerde">ENTRE GRATUITAMENTE</button>
            </Link>
          </li>
        </ul>
      </div>
      <Rodape/>
    </div>
  );
}

export default Inicio;