import { useEffect, useState } from "react";
import { getStands } from "../services/api";
import { getImagemStand } from "../utils/imagensStands";
import "../styles/Stands.css";

export default function Stands() {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    getStands().then(setStands);
  }, []);

  return (
    <main className="pagina-stands">
      <h1>STANDS</h1>

      <div className="grid-stands">
        {stands.map(s => (
          <div key={s.id} className="card-stand">
            <img src={getImagemStand(s.imagem)} alt={s.nome} />
            <h2>{s.nome}</h2>
            <p>{s.usuario}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
