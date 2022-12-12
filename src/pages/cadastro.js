import React from 'react';

import '../App.css';
import '../components/default.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Cadastro ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            <ul className='tituloCadastro'>
              <li><h3>Cadastre-se, é grátis!</h3></li>
              <li>**Com o cadastro gratuíto você tem acesso a funcionalidades 
                limitadas, caso deseje <br/> um plano personalizado acesse nossos planos 
                disponíveis.</li>
            </ul>
            <div className='formularioCadastro'>
              <form>
                <input type="text" name="" placeholder="Nome fantasia da empresa"/>
                <input type="text" name="" placeholder="CNPJ" maxLength="14"/>
                <input type="email" name="" placeholder="E-mail"/>
                <input type="tel" name="" placeholder="Telefone" maxLength="11"/>
                <input type="password" name="" placeholder="Senha" maxLength="30" minLength="6"/>
                <input type="password" name="" placeholder="Confirme sua senha"/>

                <label className='termos'>Li e concordo com os termos de uso do DOTI.
                  <input className='check' type="checkbox"/>
                  <span></span>
                </label>
                <label className='termos'>Aceito receber e-mails de noticias e dicas do DOTI.
                  <input className='check' type="checkbox"/>
                  <span></span>
                </label>
              </form>
            </div>
          </div>
          <Rodape/>
        </div>
      );
}

export default Cadastro;