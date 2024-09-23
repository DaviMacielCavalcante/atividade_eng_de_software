import { useState } from 'react';
import Home from './components/home/home';
import SelecaoConteudo from './components/selecaoConteudo/selecaoConteudo'; 
import EscolherPerfil from './components/escolherPerfil/escolherPefil';
import MenuPrincipal from './components/menuPrincipal/menuPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   // Default import (no curly braces)

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const handleLoginSuccess = () => {
    setIsAuthenticated(true); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />    {/* Using Home as a component */}
        <Route path="/escolherPerfil" element={<EscolherPerfil />} />
        <Route path="/selecaoConteudo" element={<SelecaoConteudo/>} />   {/* Using MainMenu as a component */}
        <Route path="/menuPrincipal" element={<MenuPrincipal/>}/>
      </Routes> 
    </Router>
  );
}

export default App;