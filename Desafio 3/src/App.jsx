import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";

import "./components/login/Login.module.scss";
import "./components/reembolsos/Reembolsos.module.scss";
import "./components/navbar/Navbar.module.scss";
import "./components/solicitacao/Solicitacao.module.scss";
import "./components/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reembolsos" element={<Reembolsos />} />
        <Route path="/solicitacao" element={<Solicitacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
