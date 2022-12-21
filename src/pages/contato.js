import React from 'react';

import '../App.css';
import '../components/default.css'
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Contato ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            <ul className='tituloCadastro'>
              <li>
                <h3>Entre em contato e agende uma <br/>consultoria com nosso time</h3>
              </li>
              <li>
                <h4>Deseja um plano personalizado? Uma consultoria com nosso time estratégico? <br/>Entre em contato e vamos conversar!</h4>
              </li>
            </ul>
            <form className='formularioCadastro'>
            <input 
              type="text"
              placeholder="Nome fantasia da empresa"
            />
            <input 
              type="text" 
              placeholder="CNPJ"
            />
            <input 
              type="email"
              placeholder="E-mail"
            />
            <input 
              type="tel"
              placeholder="Telefone"
            />
            <input
              type="text"
              placeholder="Assunto"
            />
              <button className="buttonVerde" style={{minWidth: "450px", padding: "10px", marginTop:"20px", marginBottom:"50px"}}>Enviar informações</button>
            </form>
            
          </div>
          <Rodape/>
        </div>
      );
}

export default Contato;