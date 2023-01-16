import '../App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';
import Task from '../components/subComponents/task';
import { Link } from 'react-router-dom';

function Historico() {
  return (
    <div>
      <MenuLogado />
      <div className='inicioLogado'>
        <div className='corpoLogado'>
          <div className='menuEsquerdo'>
              <div className='logoEmpresa'></div>
              <h3>Mercado Livre</h3>
              <h4>CNPJ</h4>
              <p>03.361.252/0001-34</p>
              <h4>Cargo</h4>
              <p>Júnior 2</p>
              <h4>Lider responsável</h4>
              <p>André Gonçalves</p>

              <ul>
                  <Link to="/logado"><li>Missões Pendentes</li></Link>
                  <li>Documentação</li>
                  <li>Painel Gerente</li>
                  <li>Histórico</li>
                  <li>Personagem</li>
              </ul>

              <h4>Recompensas</h4>
              <div className='barraProgresso'>
                  <div className='progresso'></div>
              </div>

              <table>
                  <tr>
                      <td className='rec1'></td>
                      <td className='rec2'></td>
                      <td className='rec3'></td>
                  </tr>
                  <tr>
                      <td className='rec4'></td>
                      <td className='rec5'></td>
                      <td className='rec6'></td>
                  </tr>
              </table>

          </div>
          <div className='colunaDireita'>
              <div className='historico'>
                <h4>Histórico</h4>
                <div className='missoes'>
                  <Task taskName="Escolher outra escala de cor para pessoas com daltonismo"/>
                  <Task taskName="Corrigir código enviado na equipe de front-end"/>
                  <Task taskName="Fazer o diagrama de processos da aplicação"/>
                  <Task taskName="Resolver bug de encerrar sessão"/>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Historico;