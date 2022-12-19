import '../default.css';

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
                <button className="buttonVerde">ESCOLHER ESSE PLANO</button>
            </div>
        </div>
    );
}

export default PlanoComponent;