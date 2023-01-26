import '../default.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function CardDocAdd() {

    const [showElement, setShowElement] = useState(false)
    const openAdd = () => {
        if(showElement === false){
            setShowElement(true)
        }else{
            setShowElement(false)
        }
    }

    const fecharAdd = () => {
        setShowElement(false)
    }

    return (
        <div>
            <div className='cardDoc adicionar' onClick={openAdd}>
                +
            </div>
            {showElement ?
                <div className='docAberto'>
                <div className='conteudoDoc'>
                    <h3>Adicionar novo tópico</h3>
                    <div className='descDoc'><input type="text" placeholder='Nome do tópico'/></div>
                    <div className='inserirImagem'></div>
                </div>
                <button className='fecharTask buttonVazado' onClick={fecharAdd}>FECHAR</button>
                <Link to="/documentacoa"><button className='fecharTask buttonVazado'>SALVAR</button></Link>
                </div>
            : null}
        </div>
    );
}

export default CardDocAdd;