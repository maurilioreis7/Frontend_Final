import { useState } from "react"
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import {useNavigate} from 'react-router-dom'

export default function Cadastroaluguel(){

    const navigate = useNavigate();
    const [id_produto,setId_produto] = useState("")
    const [quantidade_produto,setQuantidade_produto] = useState("")
    const [quantidade_dia,setQuantidade_dia] = useState()
    const [valor_unitario,setValor_unitario] = useState()
    const [valor_total,setValor_total] = useState()
    const [data_contrato,setData_contrato] = useState()
    const [vencimento,setVencimento] = useState()

    const Aluguel={
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        id_produto,
        quantidade_produto,
        quantidade_dia,
        valor_unitario,
        valor_total,
        data_contrato,
        vencimento
        
    };
    const salvardados=(e)=>{
        e.preventDefault();
       const banco = JSON.parse(localStorage.getItem("aluguels")|| "[]")
       banco.push(Aluguel)
       localStorage.setItem("aluguels",
       JSON.stringify(banco))
      alert("Dados Salvos com Sucesso!!!!!")
      navigate("/aluguel")
      }


      return(
        <div className="dashboard-container">
    
        <Barrasuperior />
            <div className="header">  
                <div className="menu">
                    <Menu />
                </div>
                <div className="main">
                    <Head title="Cadastro de Aluguel" />
    
                    <form onSubmit={salvardados} > 
                        
                       <input 
                       type="text" 
                       placeholder="Id_do_produto"
                       value={id_produto}
                       onChange={(e)=>setId_produto(e.target.value)}
                       />
                        <input 
                       type="password" 
                       placeholder="Quantidade_produto"
                       value={quantidade_produto}
                       onChange={(e)=>setQuantidade_produto(e.target.value)}                     
                       />
                       <input 
                       type="password" 
                       placeholder="Quantidade_dia"
                       value={quantidade_dia}
                       onChange={(e)=>setQuantidade_dia(e.target.value)}                     
                       />
                       <input 
                       type="password" 
                       placeholder="Valor_unitário"
                       value={valor_unitario}
                       onChange={(e)=>setValor_unitario(e.target.value)}                     
                       />
                       <input 
                       type="password" 
                       placeholder="Valor_total"
                       value={valor_total}
                       onChange={(e)=>setValor_total(e.target.value)}                     
                       />
                       <input 
                       type="password" 
                       placeholder="Data_contrato"
                       value={data_contrato}
                       onChange={(e)=>setData_contrato(e.target.value)}                     
                       />
                       <input 
                       type="password" 
                       placeholder="Vencimento"
                       value={vencimento}
                       onChange={(e)=>setVencimento(e.target.value)}                     
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