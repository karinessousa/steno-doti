import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // const login = async () => {

    // }

    return (
        <div className="Login">
            <form>
                <h2>Acesse sua conta</h2>
                <input 
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Link to={"/logado"}>
                    <button className="buttonVerde">Entrar</button>
                </Link>
                <h4>Esqueceu a senha?</h4>
            </form>
        </div>
    )

};

export default Login;