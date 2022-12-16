import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvmDZnbJS1rX1MfRIDiE9CkyTrvHeL_h4",
  authDomain: "steno-doti.firebaseapp.com",
  projectId: "steno-doti",
});

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, "empresas");

async function CadastrarEmpresa(name, cnpj, email, telefone, senha, senha2){

  if(senha === senha2){
    const empresa = await addDoc(
      collection(db, "empresas"), {
        name, cnpj, email, telefone, senha
      }
    );
    console.log(empresa);
  }else{ alert("as senhas não correspondem"); }
  
}

async function ListarEmpresas(){
  useEffect(() => {
    const getEmpresas = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getEmpresas();
  }, []);
}

export {CadastrarEmpresa, ListarEmpresas};