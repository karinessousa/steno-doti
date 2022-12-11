import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

import ButtonVerde from './subComponents/buttonVerde.js';
import ButtonVazado from './subComponents/buttonVazado.js';

function Menu() {
    return (
        <div className="menu">
            <div className="logobranca"></div>
            <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/planos">PLANOS</Link></li>
                <li><Link to="/time">TIME</Link></li>
                <li><Link to="/contato">CONTATO</Link></li>
                <li><ButtonVazado name="LOGIN"></ButtonVazado></li>
                <li className="ultimoBotao"><Link to="/cadastro"><ButtonVerde name={"CADASTRE-SE GRATUITAMENTE"}></ButtonVerde></Link></li>
            </ul>
        </div>
    )

};

export default Menu;