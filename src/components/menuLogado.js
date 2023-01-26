import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
// import { useState } from 'react';

function MenuLogado() {

    return (
        <div>
            <div className="menuLogado">
                <div>
                    <Link className="logobranca" to="/logado"></Link>
                    <div className='AudioSalaEquipe logobranca'></div>
                </div>
                <ul>
                    <li><input type="search" placeholder="Pesquisar..."/></li>
                    <Link to="/logado"><li>INICIO</li></Link>
                    <li>PLANOS</li>
                    <li>SUPORTE</li>
                    <li>
                        <Link to="/"><button className="buttonVazado menuUserTop">SAIR</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default MenuLogado;