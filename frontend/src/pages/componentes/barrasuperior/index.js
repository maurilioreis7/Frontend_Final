import { useState, useEffect } from 'react'; // Importação de useState e useEffect
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import logoicon from '../../../assets/img/logo2.png';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export default function Barrasuperior() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  // Função para obter o nome da sessão
  const getNome = () => {
    // Obtendo o item da sessão
    const sessionString = sessionStorage.getItem("session");
    // Fazendo o parsing do JSON
    const session = sessionString ? JSON.parse(sessionString) : {};
    // Atualizando o estado com o nome
    setNome(session.nome || ""); // Se o nome não estiver disponível, usa uma string vazia
  };

  // Usando useEffect para garantir que o nome seja obtido na montagem do componente
  useEffect(() => {
    getNome();
  }, []);

  const sair = () => {
    confirmAlert({
      title: 'Saindo do Sistema',
      message: 'Deseja realmente sair do sistema?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            navigate("/");
          }
        },
        {
          label: 'Não',
          onClick: () => alert('Ação cancelada!')
        }
      ]
    });
  };

  return (
    <div className='barrasuperior'>
      <img className='logoicon' src={logoicon} alt="Logo" />
      <h1>Costruções Locações</h1>
      <div style={{ textAlign: 'right' }}>
        <p>{nome}</p>
        <FiLogOut color='red' onClick={sair} size={20} />
      </div>
    </div>
  );
}
