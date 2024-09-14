import Home from './components/home/home';      // Default import (no curly braces)
import EscolherPerfil from './components/escolherPerfil/escolherPefil';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />    {/* Using Home as a component */}
        <Route path="/escolherPerfil" element={<EscolherPerfil />} />  {/* Using MainMenu as a component */}
      </Routes>
    </Router>
  );
}

export default App;
