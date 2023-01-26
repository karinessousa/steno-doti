import '../App.css';
import '../components/default.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';
import { Link } from 'react-router-dom';

function Gerente() {
  return (
    <div>
      <MenuLogado />
      <div className='inicioLogado'>
        <div className='corpoLogado'>
          <div className='menuEsquerdo'>
          <div className='logoEmpresa'></div>
              <h3>Steno Solutions</h3>
              <h4>CNPJ</h4>
              <p>00.000.000/0001-00</p>
              <h4>Cargo</h4>
              <p>Júnior 1</p>
              <h4>Lider responsável</h4>
              <p>Thiago Winvirg</p>

              <ul>
              <Link to="/logado"><li>Missões Pendentes</li></Link>
                  <Link to="/documentacao"><li>Documentação</li></Link>
                  <Link to="/gerente"><li>Painel Gerente</li></Link>
                  <Link to="/historico"><li>Histórico</li></Link>
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
              <div className='documenta'>
                <h4>Gerenciar Time</h4>
                <div className='formGerencia'>
                    <select name="colaborador">
                        <option value="Karine">Colaborador...</option>
                        <option value="Karine">Karine</option>
                        <option value="Thiago">Thiago</option>
                        <option value="Fillipe">Fillipe</option>
                    </select>

                    <h5>Criar Missão</h5>

                    <input type="text" placeholder='Titulo Missão'/>
                    <textarea placeholder='Descrição Missão'/>
                    <select name="Tópico">
                        <option value="Karine">Selecione tópico relacionado...</option>
                        <option value="Karine">Descrição Geral do Sistema</option>
                        <option value="Thiago">Requisitos Funcionais</option>
                        <option value="Fillipe">Requisitos Não Funcionais</option>
                        <option value="Fillipe">Interface</option>
                        <option value="Fillipe">Diagramas</option>
                        <option value="Fillipe">Bugs</option>
                    </select>

                    <button className='fecharTask buttonVazado'>SALVAR</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Gerente;