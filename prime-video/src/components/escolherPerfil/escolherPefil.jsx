import React, { useState } from 'react';
import styles from './escolherPerfil.module.css';
import { useNavigate } from 'react-router-dom';

function EscolherPerfil() {
  const [profiles, setProfiles] = useState([]);  
  const [newProfile, setNewProfile] = useState(''); 
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile.id);
    navigate('/selecaoConteudo'); 
  };

  const addProfile = () => {
    if (newProfile.trim() === "") {  
      setError("Por favor, digite o nome do perfil!");  
    } else {
      const newId = (profiles.length + 1).toString();  
      const newProfileObj = { id: newId, name: newProfile };  
      setProfiles([...profiles, newProfileObj]);
      setNewProfile('');
      setError(''); 
    }
  };

  return (
    <div className={styles.container}>
      <h1>Escolha ou Adicione um Perfil</h1>

      <input
        type="text"
        value={newProfile}
        onChange={(e) => setNewProfile(e.target.value)} 
        placeholder="Digite o nome do perfil"
      />
      <button onClick={addProfile}>Adicionar Perfil</button>  

      {error && <p className={styles.error}>{error}</p>}  

      {profiles.length > 0 ? (
        <ul className={styles.profileList}>
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className={`${styles.profileItem} ${profile.id === selectedProfile ? styles.selected : ''}`}
              onClick={() => handleProfileSelect(profile)}
            >
              {profile.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum perfil criado ainda</p>
      )}

      {selectedProfile && (
        <p>Perfil selecionado: {profiles.find(p => p.id === selectedProfile).name}</p>
      )}
    </div>
  );
}

export default EscolherPerfil;
