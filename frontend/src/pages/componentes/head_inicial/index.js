import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import logoicon from '../../../assets/img/logo2.png'
import {FiLogOut,FiLogIn } from "react-icons/fi";
import {useNavigate} from 'react-router-dom';

export default function Head_inicial (){
    const navigate =useNavigate();
const entrar = ()=>{
    navigate("/login")
}
    return(
        <div className='barrasuperior'>
               <img className='logoicon' src={logoicon} />
                <h1>Costruções Locações</h1>
                <FiLogIn className='btn-entrar' onClick={entrar} size={30}/>
   
         </div>
    )
}