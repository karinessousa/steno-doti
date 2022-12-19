import React from 'react';

import '../App.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';
import ColComponent from '../components/subComponents/colComponent.js';
import twn from '../../public/img/time/twn.jpg'

function Planos ()  {
      return(
        <div>
          <Menu/>
          <div className='painelSecundario'>
            <ul>
              <li><h3>Nosso super esquadrão</h3></li>
              <li>A melhor equipe sempre disponível para atender sua empresa</li>
            </ul>
            <div className='timeColaboradores'>
              <ColComponent 
                colphoto={twn}
                nome={'Thiago Winvirg'} 
                hab={'Chief Executive Officer/Chief Information Officer/Ciência da Computação/Dev Back end'}
                linkedin={'https://www.linkedin.com/in/thiago-winvirg-908257134/'}
                github={'https://github.com/winvirg'}
              />
              <ColComponent 
                colphoto={'../../public/img/time/kss.jpg'}
                nome={'Karine Sousa'} 
                hab={'Chief Product Officer/Chief Design Officer/Designer Digital/Product Designer/UX UI Designer/Dev Front-end'}
                linkedin={'https://www.linkedin.com/in/karinessousa/'}
                github={'https://www.linkedin.com/in/karinessousa/'}
              />
              <ColComponent 
                colphoto={'../../public/img/time/fl.jpg'}
                nome={'Fillipe Leornes'} 
                hab={'Chief Operating Officer/Chief Process And Innovation Officer/Ciência da Computação'}
                linkedin={'https://www.linkedin.com/in/fillipeleobrunos/'}
                github={'https://github.com/FillipeLeornes'}
              />
            </div>
          </div>
          <Rodape/>
        </div>
      );
}

export default Planos;