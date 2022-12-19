import React from 'react';
import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import '../App.css';
import '../components/default.css';
import Menu from '../components/menu.js';
import Rodape from '../components/rodape.js';

function Cadastro ()  {

  const [name, setName] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const register = async () => {

  }

  function CadastrarEmpresa(){

    if(name.reportValidity()===true){
      if(cnpj.reportValidity()===true){
        if(email.reportValidity()===true){
          if(telefone.reportValidity()===true){
            if(senha === senha2){
              addDoc(
                collection(db, "empresas"), { name, cnpj, email, telefone, senha }
              );
            }else{ alert("as senhas não correspondem"); }
          }
        }
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
        <div className='formularioCadastro'>
          <form>
            <input 
              type="text"
              placeholder="Nome fantasia da empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="CNPJ"
              maxLength="14"
              value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)}
            />
            <input 
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
            <input 
              type="tel"
              placeholder="Telefone"
              maxLength="11"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}  
            />
            <input
              type="password"
              placeholder="Senha"
              maxLength="30"
              minLength="6"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <input 
              type="password"
              placeholder="Confirme sua senha"
              value={senha2}
              onChange={(e) => setSenha2(e.target.value)}
            />

            <label className='termos'>
              <input className='check' type="checkbox"/>
              <span>Li e concordo com os termos de uso do DOTI.</span>
            </label>
            <label className='termos'>
              <input className='check' type="checkbox"/>
              <span>Aceito receber e-mails de noticias e dicas do DOTI.</span>
            </label>
            <button className="buttonVerde" onClick={CadastrarEmpresa}>Cadastrar</button>
          </form>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}

export default Cadastro;