import {Link} from 'react-router-dom'
import { FiUser, FiTag, FiTruck,FiShoppingCart,FiGrid, FiHome } 
from "react-icons/fi";

export default function Menu(){
    return(
        <div>
            <nav>
            <h1>Menu</h1>
            { <Link to="/dashboard" className='link'><FiHome className='icons-menu' size={24}/>Home</Link> }
            { <Link to="/dashboard" className='link'><FiHome className='icons-menu' size={24}/>Cliente</Link> }
        
            </nav>
        </div>
    )
}