import '../App.css';
import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { redirect } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, senha).then(redirect("/logado"), alert("email ou senha incorretos"));
        } catch (error) {
            console.log(error.message)
        }
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
                <button className="buttonVerde" onClick={login}>Entrar</button>
                <h4>Esqueceu a senha?</h4>
            </form>
        </div>
    )

};

export default Login;