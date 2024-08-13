import { useState } from "react"
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import {useNavigate} from 'react-router-dom'
import {FiEdit,FiTrash, FiAlignJustify } from "react-icons/fi";


export default function Cliente(){

    const navigate = useNavigate();
    const [clientes,setClientes] = useState([]);
    const [quantidade,setQuantidade] = useState(0);
    
    function mostrarclientes(){
        const banco = JSON.parse(localStorage.getItem("clientes")|| "[]")
        setQuantidade(banco.length)
        setClientes(banco);
    }
    // function editarcliente(id){
    //     alert(`Estou editando clienete de id:${id}`)
    //     navigate(`/editarusuario/${id}`)
    //    }

    return(
        <div className="dashboard-container">
        <Barrasuperior />
        <div className="header">
                <div className="menu">
                    <Menu />
                </div>
                <div className="main">
                   <FiAlignJustify className="btn-menu"/>
                  <Head title="Lista de Cliente"  />
                  {/* <Link to="/cadastrocliente" className='btn-novo'>Novo</Link>  */}
                   <table>
                    <tr>
                     <th>ID</th>
                     <th>Nome</th>
                     <th>Email</th>
                     <th></th>
                     <th></th>
                    </tr>
                    
                        {
                          clientes.map((linha)=>{
                             return(
                                <tr key={linha.toString()}>
                                <td>{linha.id}</td>
                                <td>{linha.nome}</td>
                                <td>{linha.email}</td>
                                {/* <td>
                                    <FiEdit size={24} color="blue" cursor="pointer" onClick={(e)=>{editarcliente(linha.id)}} />
                                </td>
                                <td>
                                    <FiTrash size={24} color="red" cursor="pointer" onClick={(e)=>{excluircliente(linha.id)}}/>
                                </td> */}
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