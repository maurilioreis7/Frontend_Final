import React from "react";
import '../../global.css';
import Head from "../componentes/head";
import Head_inicial from "../componentes/head_inicial";
import logo2 from "../../assets/img/img4.jpg"
import logo3 from "../../assets/img/img3.jpg"

export default function Inicial(){
    return(
<div className="dashboard-container">
        <Head_inicial />


        <div className="main-inicial">
            <Head title="Home" />

    <div className="frente-container-inical">

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


    )
}