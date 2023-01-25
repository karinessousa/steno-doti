import '../default.css';
import { useState } from 'react';

function CardDocumentacao(props) {

    const [showElement, setShowElement] = useState(false)
    const openDoc = () => {
        if(showElement === false){
            setShowElement(true)
        }else{
            setShowElement(false)
        }
    }

    const fecharDoc = () => {
        setShowElement(false)
    }

    return (
        <div>
            <div className='cardDoc' onClick={openDoc}>
                {props.nome}
            </div>
            {showElement ?
                <div className='docAberto'>
                <div className='conteudoDoc'>
                    <h3>{props.nome}</h3>
                    <div className='descDoc'>{props.descDoc}</div>
                    <div className='inserirImagem'></div>
                </div>
                <button className='fecharTask buttonVazado' onClick={fecharDoc}>FECHAR</button>
                <button className='fecharTask buttonVazado' onClick={fecharDoc}>EDITAR</button>
                </div>
            : null}
        </div>
    );
}

export default CardDocumentacao;