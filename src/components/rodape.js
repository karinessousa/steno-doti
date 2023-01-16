import '../App.css';

function Rodape() {
    return (
      <div className="rodape">
        <div className='logobranca'></div>
        <ul className='redes'>
          <li className='facebook rede'></li>
          <a href='https://www.instagram.com/stenosolutions/' target='blank'><li className='instagram rede'></li></a>
          <li className='linkedin rede'></li>
        </ul>
        <h4>Copyright 2022 Steno Solutions - Todos os direitos reservados - solutionssteno@gmail.com</h4>
      </div>
    );
}

export default Rodape;