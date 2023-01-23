import '../App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';
import Task from '../components/subComponents/task';
import { Link } from 'react-router-dom';

function InicioLogado() {
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
                  <li>Painel Gerente</li>
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
              <div className='missoesPendentes'>
                <h4>Missões Pendentes</h4>
                <div className='missoes'>
                  <Task
                    taskName="Front-end tela inicial"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Plano de navegação"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Front-end login"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Corrigir erro ao guardar arquivos no banco de dados"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Ajustar página de cadastro na plataforma mobile"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Resolver problema de login na plataforma"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Resolver visualização de documentos salvos"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Escolher outra escala de cor para pessoas com daltonismo"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Corrigir código enviado na equipe de front-end"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Fazer o diagrama de processos da aplicação"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                  <Task 
                    taskName="Resolver bug de encerrar sessão"
                    descTask="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc a erat vel erat dignissim hendrerit. Proin at augue eu libero 
                    malesuada sollicitudin vel id eros. Duis semper sem quis diam malesuada 
                    efficitur. Donec tristique, lorem id consequat tristique, tellus ex finibus 
                    purus, vel condimentum ante felis at libero. In sit amet auctor nibh, eu 
                    accumsan nisl."/>
                </div>
              </div>
              <div className='game'>

              </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default InicioLogado;