import {Link} from 'react-router-dom'
import { FiUser, FiTag, FiTruck,FiShoppingCart,FiGrid, FiHome } 
from "react-icons/fi";

export default function Menu(){
    return(
        <div>
            <nav>
            <h1>Menu</h1>
            { <Link to="/dashboard" className='link'><FiHome className='icons-menu' size={24}/>Home</Link> }
            <Link to="/cliente" className='link'><FiUser className='icons-menu' size={24}/>Cliente</Link>
            <Link to="/produto" className='link'><FiTag className='icons-menu' size={24}/>Produto</Link>
        
            </nav>
        </div>
    )
}