import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from '../pages/inicio';
import Planos from '../pages/planos';
import Time from '../pages/time';
import Contato from '../pages/contato';
import Cadastro from '../pages/cadastro';
import Historico from "../pages/historico";

import InicioLogado from "../pages/inicioLogado";
import Documenta from "../pages/documenta";
import Documento from "../pages/documento";
import Gerente from "../pages/gerente";


function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element = { <Inicio /> } />
                <Route  path="/planos" element = { <Planos /> } />
                <Route  path="/time" element = { <Time /> } />
                <Route  path="/contato" element = { <Contato /> } />
                <Route  path="/cadastro" element = { <Cadastro /> } />
                <Route  path="/logado" element = { <InicioLogado /> } />
                <Route  path="/historico" element = { <Historico /> } />
                <Route  path="/documentacao" element = { <Documenta /> } />
                <Route  path="/documentacoa" element = { <Documento /> } />
                <Route  path="/gerente" element = { <Gerente /> } />
            </Routes>
        </BrowserRouter>
    )
 }

 export default Router;