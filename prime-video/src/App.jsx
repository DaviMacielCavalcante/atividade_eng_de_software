import { useState } from 'react';
import Home from './components/home/home';
import SelecaoConteudo from './components/selecaoConteudo/selecaoConteudo'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const handleLoginSuccess = () => {
    setIsAuthenticated(true); 
  };

  return (
    <div>
      {isAuthenticated ? (
        <SelecaoConteudo /> 
      ) : (
        <Home onLoginSuccess={handleLoginSuccess} /> 
      )}
    </div>
  );
}

export default App;