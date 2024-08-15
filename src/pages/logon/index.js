import React, { useState } from "react";
import '../../global.css';
import logo from '../../assets/img/logo2.jpg'
import {useNavigate} from 'react-router-dom';
import api from "../../server/api";

export default function Logon(){
    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    

    const usuario={
        email,
        senha
    }



    const logar=(e)=>{
        e.preventDefault();
      
        
           
            if(email==="" || senha===""){
                alert("Campos vazios, verifique!");
            }else{
                       
                        api.post(`/usuario/logar`,usuario)
                        .then(res => {
                          if(res.status==200){
                            let resultado=res.data.usuario;
                                if(resultado.length>0){
        
                                   
                                    let session=
                                    {
                                        nome:resultado[0].nome,
                                        email:resultado[0].email,
                                        id:resultado[0].id
                                    }
                                   
                                    //aqui setamos a chave na sessionStorage
                                    sessionStorage.setItem("session",JSON.stringify(session))
    
                                    navigate('/dashboard')
                                }else{
                                    sessionStorage.clear();
                                    alert("Digite Email ou Senha validos")
                                }
                    
                          }else{
                              console.log("houve um erro na requisição")
                          }
              
                        })  
                        .catch(function (error) {
                          console.log(error);
                        });
                     
                       
        
   
           
    
            }
            
        }
   return(
    <div className="logon-container">
        <section className="form">
           <img src={logo} width={200} />
           <h1>Faça seu login</h1>
            <form onSubmit={logar}>
                <input 
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                />
                <input 
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
                               
                />
                <button className="button_login" type="submit">
                    Entrar
                </button>
            </form>
        </section>
    </div>
   ) 
}