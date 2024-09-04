import { useState } from "react"
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import {useNavigate} from 'react-router-dom'

export default function Cadastrocliente(){

    const navigate = useNavigate();
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState()

    const cliente={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        nome,
        email,
        senha
    };
    const salvardados=(e)=>{
        e.preventDefault();
       const banco = JSON.parse(localStorage.getItem("clintes")|| "[]")
       banco.push(cliente)
       localStorage.setItem("clientes",
       JSON.stringify(banco))
      alert("Dados Salvos com Sucesso!!!!!")
      navigate("/cliente")
      }


      return(
        <div className="dashboard-container">
    
        <Barrasuperior />
            <div className="header">  
                <div className="menu">
                    <Menu />
                </div>
                <div className="main">
                    <Head title="Cadastro de Cliente" />
    
                    <form onSubmit={salvardados} > 
                        
                       <input 
                       type="text" 
                       placeholder="Nome"
                       value={nome}
                       onChange={(e)=>setNome(e.target.value)}
                       
                       />
                       <input 
                       type="email" 
                       placeholder="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}                      
                       />
                       <input 
                       type="password" 
                       placeholder="senha"
                       value={senha}
                       onChange={(e)=>setSenha(e.target.value)}                     
                       />
                       <button className="btn-salvar">
                        Salvar
                       </button>
                    </form>

                </div>
        </div>
        
    </div>
            )
}