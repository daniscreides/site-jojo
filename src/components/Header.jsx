import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/imagens/logo.png";

export default function Header() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuAberto(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && busca.trim() !== "") {
      navigate(`/pesquisa?q=${busca}`);
      setBusca("");
      setMenuAberto(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={scrollTop}>
          <img src={logo} alt="JoJo Bizarre Adventure" />
        </Link>

        <nav className={`menu ${menuAberto ? "ativo" : ""}`}>
          <Link to="/" onClick={scrollTop}>INÍCIO</Link>
          <Link to="/partes" onClick={scrollTop}>PARTES</Link>
          <Link to="/sobre" onClick={scrollTop}>SOBRE</Link>
        </nav>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="PESQUISAR PERSONAGENS OU STANDS..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <button
          className={`hamburger ${menuAberto ? "ativo" : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}