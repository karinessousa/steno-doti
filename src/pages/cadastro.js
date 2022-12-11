import React from 'react';
import ButtonVerde from '../components/subComponents/buttonVerde.js';
import FormCadastro from '../components/formcadastro.js';

import '../App.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Cadastro ()  {
      return(
        <div>
          <Menu/>

          <div className='painelSecundario'>
            <div className='alinhar-cadastro'>
              <ul>
                <li>
                <h2>Cadastre-se, é grátis!</h2>
                </li>
                <li>
                <h4>**Com o cadastro gratuíto você tem acesso a funcionalidades limitadas, caso deseje um plano personalizado 
                acesse nossos planos disponíveis.</h4>
                </li>
              </ul>
            </div>

            <div className='alinhar-cadastro'>
              <form>
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
                      type={'password'}
                      name={'senha'}
                      placeholder={'Senha'}
                    />
                    <FormCadastro
                      type={'password'}
                      name={'confirmar-senha'}
                      placeholder={'Confirme sua senha'}
                    />
                </ul>
              </form>
            </div>

            <div className='alinhar-checkbox'>
              <ul>
                <li>
                  <input type="checkbox" id="termos" name="termos"/>
                  <label for="termos">Li e concordo com os termos de uso do DOTI</label>
                </li>
                <li>
                  <input type="checkbox" id="receber-email" name="receber-email"/>
                  <label for="receber-email">Aceito receber e-mails de notícias e dicas do DOTI</label>
                </li>
                <li><ButtonVerde name={"Cadastrar"}/></li>
                
              </ul>
            </div>
          </div>
          <Rodape/>
        </div>
      );
}

export default Cadastro;