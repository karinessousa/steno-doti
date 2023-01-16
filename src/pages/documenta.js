import '../App.css';
import '../components/default.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';
import { Link } from 'react-router-dom';
import CardDocumentacao from '../components/subComponents/cardDocumentacao';

function Documenta() {
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
              <div className='documenta'>
                <h4>Documentação</h4>
                <div className='cardsDocumenta'>
                    <CardDocumentacao nome="Descrição Geral do Sistema"/>
                    <CardDocumentacao nome="Requisitos Funcionais"/>
                    <CardDocumentacao nome="Requisitos Não Funcionais"/>
                    <CardDocumentacao nome="Interface"/>
                    <CardDocumentacao nome="UML"/>
                    <div className="cardDoc adicionar">+</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Documenta;