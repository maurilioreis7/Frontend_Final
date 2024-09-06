import React, { useState,useEffect } from "react";
import '../../global.css';
import Head from "../componentes/head";
import Menu from "../componentes/menu";
import Barrasuperior from "../componentes/barrasuperior";
import logo2 from "../../assets/img/img4.jpg"
import logo3 from "../../assets/img/img3.jpg"
import api from "../../server/api"; // Certifique-se de que o caminho para a API está correto


export default function Dashboard(){
    const [dados, setDados] = useState([]);

    useEffect(() => {
        mostrarLista();
    }, []);

    async function mostrarLista() {
        try {
            // Supondo que a rota da API para obter produtos seja '/produtos'
            const response = await api.get('/produto');
            setDados(response.data.produtos); // Ajuste conforme a estrutura da resposta da API
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }
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
        <div className="imagens">
        {
                            dados.map((produto) => (
                                <div key={produto.id} className="card">
                                    <img src={produto.caminho} alt={produto.descricao} className="produto-imagem" />
                                    <h3>{produto.descricao}</h3>
                                    <p>R$ {produto.valor_unitario}</p>
                                    <button className="btn-mais-detalhes">Mais detalhes</button>
                                </div>
                            ))
                        }
        </div>

    </div>

        
    </div>  

    </div>

    </div>
</div>


    )
}