import {useState} from "react"
import styles from './App.module.css';

function App() {

  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");
  const [valid, setValid] = useState(false);

  const loginHandler = (e) => {
    setLogin(e.target.value);
  }

  const pwdHandler = (e) => {
    setPwd(e.target.value);
  }

  const validateCredentials = () => {
    const user = "admin";
    const senha = "12345";

    if (login === user && pwd === senha) {
      setValid(true);
      setMsg("");
    } else {
      setMsg("Acesso negado!");
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Prime video</h1>
        <p>login: </p>
        <input 
          type="text"
          onChange={loginHandler}
          value={login}
          placeholder="informeu seu usuário"/>
        <p>senha: </p>
        <input 
          type="text"
          onChange={pwdHandler}
          value={pwd}
          placeholder="digite sua senha"/>
        <div>
          <button onClick={validateCredentials}>Login</button>
          {validateCredentials && <p>{msg}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
