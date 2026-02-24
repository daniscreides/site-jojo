import { useEffect, useState } from "react";
import { getPersonagens } from "../services/api";
import { getImagemPersonagem } from "../utils/imagensPersonagens";
import "../styles/Personagens.css";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    getPersonagens().then(setPersonagens);
  }, []);

  return (
    <main className="pagina-personagens">
      <h1>PERSONAGENS</h1>

      <div className="grid-personagens">
        {personagens.map(p => (
          <div key={p.id} className="card-personagem">
            <img src={getImagemPersonagem(p.imagem)} alt={p.nome} />
            <h2>{p.nome}</h2>
            <p>{p.tipo}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
