import React from 'react';
import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { doc, setDoc } from 'firebase/firestore';

import '../App.css';
import '../components/default.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Cadastro ()  {

  const [nome, setNome] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const registerEmpresa = async () => {
    if(senha === senha2){
      try {
        await setDoc(doc,(db, "empresas"),{
          auth, nome, cnpj, email, telefone, senha
        }).then(
          await createUserWithEmailAndPassword(auth, email, senha), 
          alert("corrija os erros e tente novamente")
        );
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return(
    <div>
      <Menu/>
      <div className='painelSecundario'>
        <ul className='tituloCadastro'>
          <li><h3>Cadastre-se, é grátis!</h3></li>
          <li>**Com o cadastro gratuíto você tem acesso a funcionalidades 
            limitadas, caso deseje <br/> um plano personalizado acesse nossos planos 
            disponíveis.</li>
        </ul>
        <div>
          <form className='formularioCadastro'>
            <input 
              type="text"
              placeholder="Nome fantasia da empresa"
              onChange={(e) => setNome(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="CNPJ"
              onChange={(e) => setCNPJ(e.target.value)}
            />
            <input 
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}  
            />
            <input 
              type="tel"
              placeholder="Telefone"
              onChange={(e) => setTelefone(e.target.value)}  
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <input 
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setSenha2(e.target.value)}
            />

            <label className='termos' style={{marginLeft: "-75px"}}>
              <input className='check' type="checkbox"/>
              <span>Li e concordo com os termos de uso do DOTI.</span>
            </label>
            <label className='termos'>
              <input className='check' type="checkbox"/>
              <span>Aceito receber e-mails de noticias e dicas do DOTI.</span>
            </label>
            <br/>
            <button className="buttonVerde" onClick={registerEmpresa} style={{minWidth: "450px", paddingBottom: "10px", paddingTop: "10px", marginTop: "-10px"}}>Cadastrar</button>
          </form>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Cadastro;