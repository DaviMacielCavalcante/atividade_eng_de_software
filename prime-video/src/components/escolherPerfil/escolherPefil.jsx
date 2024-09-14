import React, { useState } from 'react';
import styles from './escolherPerfil.module.css';  // Estilos CSS module para essa página
import { useNavigate } from 'react-router-dom';

const profiles = [
  { id: '1', name: 'Perfil 1' },
  { id: '2', name: 'Perfil 2' },
  { id: '3', name: 'Perfil 3' },
  { id: '4', name: 'Perfil 4' },
];

function EscolherPerfil() {

  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile.id);
  };

  return (
    <div className={styles.container}>
      <h1>Escolha um perfil</h1>
      <ul className={styles.profileList}>
        {profiles.map((profile) => (
          <li 
            key={profile.id} 
            className={`${styles.profileItem} ${profile.id === selectedProfile ? styles.selected : ''}`}
            onClick={() => {
              handleProfileSelect(profile)
              navigate('/selecaoConteudo')
            }}
          >
            {profile.name}
          </li>
        ))}
      </ul>
      {selectedProfile && (
        <p>Perfil selecionado: {profiles.find(p => p.id === selectedProfile).name}</p>
      )}
    </div>
  );
}

export default EscolherPerfil;
