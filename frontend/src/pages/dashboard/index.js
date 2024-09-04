import React from "react";
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import logo2 from "../../assets/img/img4.jpg"
import logo3 from "../../assets/img/img3.jpg"

export default function Dashboard(){
    return(
<div className="dashboard-container">
        <Barrasuperior />
    <div className="header">    
        <div className="menu">
            <Menu />
        </div>
        <div className="main">
            <Head title="Home" />

    <div className="frente-container">

    <div>
        <h2>Nossos Produtos</h2>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    
    </div>

        <div className="imagens">
            <img src={logo2}/>
            <img src={logo3}/>
        </div>

    </div>  

    </div>

    </div>
</div>


    )
}