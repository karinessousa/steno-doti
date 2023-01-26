import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

function MenuLogado() {

    const [showElement, setShowElement] = useState(false)
    const [showElement2, setShowElement2] = useState(true)
    const [showElement3, setShowElement3] = useState(false)
    const [showElement4, setShowElement4] = useState(true)
    const controlVoice = () => {
        if(showElement === true){
            setShowElement(false)
            setShowElement2(true)
        }else{
            setShowElement(true)
            setShowElement2(false)
        }
    }

    const controlAudio = () => {
        if(showElement === true){
            setShowElement3(false)
            setShowElement4(true)
        }else {
            setShowElement3(true)
            setShowElement4(false)
        }
    }

    return (
        <div>
            <div className="menuLogado">
                <div>
                    <Link className="logobranca" to="/logado"></Link>
                    {showElement ? <div className='voiceDesativado logobranca' onClick={controlVoice}></div> : null}
                    {showElement2 ? <div className='voiceSalaEquipe logobranca' onClick={controlVoice}></div> : null}
                    {showElement3 ? <div className='audioDesativado logobranca' onClick={controlAudio}></div> : null}
                    {showElement4 ? <div className='audioSalaEquipe logobranca' onClick={controlAudio}></div> : null}
                    {/* <div className='AudioSalaEquipe logobranca' onClick={controlAudio}></div> */}
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