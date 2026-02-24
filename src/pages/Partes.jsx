import { partes } from "../data/partes";
import { Link } from "react-router-dom";
import "../styles/Partes.css";
import { importarImagens } from "../utils/importarImagens";

const imagensPartes = importarImagens("partes");

export default function Partes() {
  return (
    <main className="partes-page-container">
      <div className="partes-page-titulo">
        <h1>Escolha uma parte e comece sua jornada!</h1>
      </div>

      <div className="partes-page-cards">
        {partes.map((parte) => (
          <div key={parte.id} className="partes-page-card">
            
            <div className="partes-page-card-imagem">
              <img src={parte.imagem} alt={parte.titulo} />
            </div>

            <div className="partes-page-card-info partes-page-info-bloco">
              <h3>{parte.titulo}</h3>
              <p>Mangá: {parte.manga}</p>
              <p>Anime: {parte.anime}</p>
            </div>

            <Link to={`/partes/${parte.id}`}>
              <button className="partes-card-page-botao">
                SAIBA MAIS
              </button>
            </Link>

          </div>
        ))}
      </div>
    </main>
  );
}