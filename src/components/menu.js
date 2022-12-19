import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

import Login from './login';

function Menu() {

    const [showElement, setShowElement] = useState(false)
    const openLogin = () => {
        if(showElement === false){
            setShowElement(true)
        }else{
            setShowElement(false)
        }
    }

    return (
        <div>
            {showElement ? <Login/> : null}
            <div className="menu">
                <div className="logobranca"><Link to="/"></Link></div>
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/planos">PLANOS</Link></li>
                    <li><Link to="/time">TIME</Link></li>
                    <li><Link to="/contato">CONTATO</Link></li>
                    <li>
                        <button className="buttonVazado" onClick={openLogin}>LOGIN</button>
                    </li>
                    <li className="ultimoBotao">
                        <Link to="/cadastro">
                            <button className="buttonVerde">CADASTRE-SE GRATUITAMENTE</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Menu;