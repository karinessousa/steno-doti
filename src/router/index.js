import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from '../pages/inicio';
import Planos from '../pages/planos';
import Time from '../pages/time';
import Contato from '../pages/contato';
import Cadastro from '../pages/cadastro';


function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element = { <Inicio /> } />
                <Route  path="/planos" element = { <Planos /> } />
                <Route  path="/time" element = { <Time /> } />
                <Route  path="/contato" element = { <Contato /> } />
                <Route  path="/cadastro" element = { <Cadastro /> } />
            </Routes>
        </BrowserRouter>
    )
 }

 export default Router;