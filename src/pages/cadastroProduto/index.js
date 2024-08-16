import { useState } from "react"
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import {useNavigate} from 'react-router-dom'

export default function CadastroProduto(){

    const navigate = useNavigate();
    const [descricao,setDescricao] = useState("")
    const [valor_initario,setValor_unitario] = useState("")

    const produto={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        descricao,
        valor_initario
    };
    const salvardados=(e)=>{
        e.preventDefault();
       const banco = JSON.parse(localStorage.getItem("produtos")|| "[]")
       banco.push(produto)
       localStorage.setItem("produtos",
       JSON.stringify(banco))
      alert("Dados Salvos com Sucesso!!!!!")
      navigate("/produto")
      }


      return(
        <div className="dashboard-container">
    
        <Barrasuperior />
            <div className="header">  
                <div className="menu">
                    <Menu />
                </div>
                <div className="main">
                    <Head title="Cadastro de Produto" />
    
                    <form onSubmit={salvardados} > 
                        
                       <input 
                       type="text" 
                       placeholder="Descricao"
                       value={descricao}
                       onChange={(e)=>setDescricao(e.target.value)}
                       
                       />
                       <input 
                       type="text" 
                       placeholder="Valor_unitario"
                       value={valor_initario}
                       onChange={(e)=>setValor_unitario(e.target.value)}                      
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