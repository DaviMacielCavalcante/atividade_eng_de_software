
import { useState } from 'react';
import styles from './home.module.css';

function Home({ onLoginSuccess }) {
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');
  const [msg, setMsg] = useState('');

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const pwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const validateCredentials = () => {
    const user = 'admin';
    const senha = '12345';

    if (login === user && pwd === senha) {
      setMsg('');
      onLoginSuccess(); 
    } else {
      setMsg('Acesso negado!');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Prime Video</h1>
        <p>login:</p>
        <input
          type="text"
          onChange={loginHandler}
          value={login}
          placeholder="Informe seu usuário"
        />
        <p>Senha:</p>
        <input
          type="text"
          onChange={pwdHandler}
          value={pwd}
          placeholder="digite sua senha"
        />
        <div>
          <button onClick={validateCredentials}>Login</button>
          {validateCredentials && <p>{msg}</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
