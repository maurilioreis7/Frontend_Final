import React,{useState,useEffect} from "react";
import '../../global.css'
// import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import { Link, useNavigate } from "react-router-dom";
import {FiEdit,FiTrash, FiAlignJustify } from "react-icons/fi";
import Barrasuperior from "../componentes/barrasuperior";


export default function Aluguel(){

    const navigate = useNavigate();
    const [aluguels,setAluguels] = useState([]);
    const [quantidade,setQuantidade] = useState(0);
    
    function mostraraluguels(){
        const banco = JSON.parse(localStorage.getItem("aluguels")|| "[]")
        setQuantidade(banco.length)
        setAluguels(banco);


    }
    // function editarcliente(id){
    //     alert(`Estou editando clienete de id:${id}`)
    //     navigate(`/editarusuario/${id}`)
    //    }

    useEffect(()=>{
        mostraraluguels()
    },[])

    return(
        <div className="dashboard-container">
        <Barrasuperior />
        <div className="header">
                <div className="menu">
                    <Menu />
                </div>
                <div className="main">
                   <FiAlignJustify className="btn-menu"/>
                  <Head title="Lista de alugueis"  />
                  <Link to="/cadastroaluguel" className='btn-novo'>Novo</Link> 
                   <table>
                    <tr>
                     <th>ID</th>
                     <th>Id_produto</th>
                     <th>Quantidade_produto</th>
                     <th>Quantidade_dia</th>
                     <th>Valor_unitario</th>
                     <th>valor_total</th>
                     <th>Data_contrato</th>
                     <th>Vencimento</th>
                     <th></th>
                     <th></th>
                    </tr>
                    
                        {
                          aluguels.map((linha)=>{
                             return(
                                <tr key={linha.toString()}>
                                <td>{linha.id}</td>
                                <td>{linha.id_produto}</td>
                                <td>{linha.quantidade_produto}</td>
                                <td>{linha.quantidade_dia}</td>
                                <td>{linha.valor_unitario}</td>
                                <td>{linha.valor_total}</td>
                                <td>{linha.vencimento}</td>
                                </tr>
                             )
                          })  
                        }
             
                     <tr>
                      <th colSpan={5}>Total de Registros:{quantidade}</th>
           
                     </tr>
                   </table>
        
        
        
                </div>
                </div>
                
        </div>
            )
        
       
    
}