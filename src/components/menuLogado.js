import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

import Login from './login';

function MenuLogado() {

    const [showElement, setShowElement] = useState(false)
    const menuUserTop = () => {
        if(showElement === false){
            setShowElement(true)
        }else{
            setShowElement(false)
        }
    }

    return (
        <div>
            {showElement ? <Login/> : null}
            <div className="menuLogado">
                <div><Link className="logobranca" to="/"></Link></div>
                <ul>
                    <li><input type="search" placeholder="Pesquisar..."/></li>
                    <li>INICIO</li>
                    <li>PLANOS</li>
                    <li>SUPORTE</li>
                    <li>
                        <button className="buttonVazado menuUserTop" onClick={menuUserTop}>USUÁRIO &ensp; &or;</button>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default MenuLogado;