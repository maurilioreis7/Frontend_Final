import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Logon from './pages/logon'
import Dashboard from './pages/dashboard'
import Cliente from './pages/cliente'
import Cadastrocliente from './pages/cadastroCliente'
import Produto from './pages/produto'

export default function Rotas(){
    return(
     <BrowserRouter>
        <Routes>

        <Route path="/" exact element={<Logon />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/cliente"  element={<Cliente />} />
        <Route path="/cadastrocliente"  element={<Cadastrocliente />} />
        <Route path="/produto"  element={<Produto />} />

        </Routes>
     
     </BrowserRouter>

    )
}
