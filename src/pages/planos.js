import React from 'react';

import '../App.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';
import PlanoComponent from '../components/subComponents/planoComponent';

function Planos ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            <ul>
              <li><h3>Planos para todo tipo de equipe</h3></li>
              <li>Melhore o ambiente de trabalho com o DOTI</li>
            </ul>
            <div className='planosDisponiveis'>
              <PlanoComponent 
                nome={'Básico'} 
                descricao={'Para equipes pequenas de até 6 pessoas'} 
                lista={'Limitado a 6 perfis/Missões ilimitadas/1 Painel gerente/Armazenamento de 1gb/Limitado a 2 salas/Limitação de personagens/Limitação de itens'}
                preco={'R$ 0.00'}  
              />
              <PlanoComponent 
                nome={'Premium'} 
                descricao={'Para equipes médias de até 30 pessoas'} 
                lista={'Limitado a 30 perfis/Missões ilimitadas/5 Painéis gerentes/Armazenamento de 4gb/Limitado a 7 salas/Regras personalizadas/Todos os personagens e itens'}
                preco={'R$ 59.90'}  
              />
              <PlanoComponent 
                nome={'Premium Plus'} 
                descricao={'Para equipes grandes de até 60 pessoas'} 
                lista={'60 perfis/missões ilimitadas/10 painéis gerentes/Armazenamento 8gb/12 salas/Regras personalizadas/Todos os personagens e itens'}
                preco={'R$ 115.90'}  
              />
            </div>
          </div>
          <Rodape/>
        </div>
      );
}

export default Planos;