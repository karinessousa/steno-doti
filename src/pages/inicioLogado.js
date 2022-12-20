import '../App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

import MenuLogado from '../components/menuLogado';
import Rodape from '../components/rodape';

function InicioLogado() {
  return (
    <div>
      <MenuLogado />
      <div className='inicioLogado'>
        <div className='menuEsquerdo'>
            <div className='logoEmpresa'></div>
            <h3>Nome Empresa</h3>
            <h4>CNPJ</h4>
            <p>XX.XXX.XXX/0001-XX</p>
            <h4>Cargo</h4>
            <p>Júnior 2</p>
            <h4>Lider responsável</h4>
            <p>André Gonçalves</p>

            <ul>
                <li>Missões Pendentes</li>
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
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>

        </div>
        <div className='colunaDireita'>
            <div className='missoesPendentes'>

            </div>
            <div className='game'>

            </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default InicioLogado;