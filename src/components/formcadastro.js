import '../App.css';

function FormCadastro(props) {
    return (
        <div className='alinhar-cadastro'>
            <li>
                <input type={props.type} name={props.name} placeholder={props.placeholder}></input>
            </li>
        </div>
    )

};

export default FormCadastro;