import '../default.css';
import ButtonVerde from './buttonVerde';

// Toda vez que precisar usar um botão verde, só usar esse componente aqui e 
// passar como props o nome que vai dentro

function PlanoComponent(props) {

    const list = props.lista;
    const lista = list.split('/');

    return (
        <div className='plano'>
            <h2>{props.nome}</h2>
            <h4>{props.descricao}</h4>
            <ul>
                {lista.map((item) => <li>{item}</li>)}
            </ul>
            <div className='aoCentro'>
                <h2 className='preco'>{props.preco}</h2>
                <ButtonVerde name={"ESCOLHER ESSE PLANO"}></ButtonVerde>
            </div>
        </div>
    );
}

export default PlanoComponent;