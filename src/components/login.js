import '../App.css';
import React from 'react';
import { useState } from 'react';

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {

    }

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
                <button className="buttonVerde">Cadastrar</button>
                <button className="buttonVazado">Fechar</button>
                <h4>Esqueceu a senha?</h4>
            </form>
        </div>
    )

};

export default Login;