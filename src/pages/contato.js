import React from 'react';
// import FormCadastro from '../components/formcadastro';
// import ButtonVerde from '../components/subComponents/buttonVerde';

import '../App.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Contato ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            {/* <div className='alinhar-contato'>
              <ul>
              <li>
                <h2>Entre em contato e agende uma consultoria com nosso time</h2>
              </li>
              <li>
                <h4>Deseja um plano personalizado? Uma consultoria com nosso time estratégico? entre em contato e vamos conversar</h4>
              </li>
              </ul>
            </div>
            
            <label>
              <ul>
                <FormCadastro
                  type={'text'}
                  name={'nome-fantasia'}
                  placeholder={'Nome fantasia da empresa'}
                />

                <FormCadastro
                  type={'text'}
                  name={'cnpj'}
                  placeholder={'CNPJ'}
                />

                <FormCadastro
                  type={'email'}
                  name={'e-mail'}
                  placeholder={'E-mail'}
                />

                <FormCadastro
                  type={'number'}
                  name={'telefone'}
                  placeholder={'Telefone'}
                />

                <FormCadastro
                type={'text'}
                name={'assunto'}
                placeholder={'Assunto'}
                />

                <li><ButtonVerde name={"Enviar informações"}/></li>
              </ul>

            </label> */}
          </div>
          <Rodape/>
        </div>
      );
}

export default Contato;