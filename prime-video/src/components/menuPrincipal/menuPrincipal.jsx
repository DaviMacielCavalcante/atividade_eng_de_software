import React, { useState } from 'react';
import styles from './menuPrincipal.module.css';  // Estilos CSS module para essa página
import { useNavigate } from 'react-router-dom';


function MenuPrincipal() {


  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const showCustomError = (message) => {
    const notification = document.createElement('div');
    notification.className = styles.customNotification; 
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 10000);
  };


  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile.id);
  };

  return (
    <div className={styles.container}>
      <h1>Escolha uma opção</h1>
      <button onClick={() => navigate('/escolherPerfil')}>Perfis</button>
      <button onClick={() => navigate('/selecaoConteudo')}>Vídeos</button>
      <button onClick={() => showCustomError("Opção não disponível!")}>Configurações</button>
      <button onClick={() => navigate('/')}>Sair da conta</button>
      
    </div>
  );
}

export default MenuPrincipal;
