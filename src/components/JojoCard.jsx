import { Link } from "react-router-dom";
import "../styles/JojoCard.css";
import { importarImagens } from "../utils/importarImagens";

const imagensJojos = importarImagens("jojos");

export default function JojoCard({ jojo }) {
  if (!jojo) return null;

  const imagemSrc = imagensJojos[jojo.imagem];

  return (
    <article className="jojo-card-component-container">
      <div className="jojo-card-component-imagem">
        {imagemSrc ? (
          <img src={imagemSrc} alt={jojo.nome} />
        ) : (
          <div className="jojo-card-component-placeholder">Sem imagem</div>
        )}
      </div>

      <div className="jojo-card-component-info">
        <h3>{jojo.nome}</h3>
        <p>{jojo.parte}</p>

        <Link to={`/jojos/${jojo.id}`}>
          <button className="jojo-card-component-botao">
            SAIBA MAIS
          </button>
        </Link>
      </div>
    </article>
  );
}