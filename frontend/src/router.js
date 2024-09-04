import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Logon from './pages/logon'
import Dashboard from './pages/dashboard'
import Cliente from './pages/cliente'
import Cadastrocliente from './pages/cadastroCliente'
import Produto from './pages/produto'
import Aluguel from './pages/aluguel'
import Cadastroaluguel from './pages/cadastroAluguel'
import Cadastroproduto from './pages/cadastroProduto'
import Inicial from './pages/inicial'


 

export default function Rotas(){
    return(
     <BrowserRouter>
        <Routes>
        
        <Route path="/" exact element={<Inicial />} />
        <Route path="/login" exact element={<Logon />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/cliente"  element={<Cliente />} />
        <Route path="/cadastrocliente"  element={<Cadastrocliente />} />
        <Route path="/cadastroaluguel"  element={<Cadastroaluguel />} />
        <Route path="/cadastroproduto"  element={<Cadastroproduto />} />
        <Route path="/produto"  element={<Produto />} />
        <Route path="/aluguel"  element={<Aluguel />} />

        </Routes>
     
     </BrowserRouter>

    )
}
