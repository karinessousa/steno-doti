import styled from 'styled-components';
import '../default.css';

function ColComponent(props) {

    const habilidade = props.hab;
    const habilidades = habilidade.split('/');
    const ColPhoto = styled.div`
        background-image: url('${props.colphoto}');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 180px;
        width: 180px;
        border-radius: 100%;
        border: solid black;
        margin-bottom: 30px;
    `;;

    return (
        <div className='colaborador'>
            <ColPhoto></ColPhoto>
            <h2>{props.nome}</h2>
            <ul>
                {habilidades.map((item) => (<li key={item}>{item}</li>))}
            </ul>
            <ul className='redesSociais'>
                <li className='linkedin'></li>
                <li className='Github'></li>
            </ul>
        </div>
    );
}

export default ColComponent;