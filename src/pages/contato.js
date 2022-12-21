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
            <div className='alinhar-contato'>
              <ul>
              <li>
                <h2>Entre em contato e agende uma consultoria com nosso time</h2>
              </li>
              <li>
                <h4>Deseja um plano personalizado? Uma consultoria com nosso time estratégico? entre em contato e vamos conversar</h4>
              </li>
              </ul>
            </div>
            <form>
              <label>
                  <ul>
                      
                    <li><button type='submit' name='Enviar informações' className='ButtonVerde'> Enviar informações</button></li>
                  </ul>

                </label>  
            </form>
            
          </div>
          <Rodape/>
        </div>
      );
}

export default Contato;