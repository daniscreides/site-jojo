import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ParteDetalheCard from "./ParteDetalheCard";
import ScrollTopButton from "../components/ScrollTopButton";
import { personagens } from "../data/personagens";
import { stands } from "../data/stands";
import { partes } from "../data/partes";
import "../styles/ParteDetalhe.css";

export default function ParteDetalhe() {
  const { id } = useParams();
  const parteId = Number(id);

  useEffect(() => {
    document.body.className = `parte-${parteId}`;

    return () => {
      document.body.className = "";
    };
  }, [parteId]);

  const parte = partes.find(p => p.id === parteId);

  if (!parte) {
    return (
      <main className="parte-detalhe-page-container">
        <h1>Parte não encontrada</h1>
      </main>
    );
  }

  const personagensDaParte = personagens.filter(
    p => p.parte_id === parteId
  );

  const standsDaParte = stands.filter(
    s => s.parte_id === parteId
  );

  return (
    <main className={`parte-detalhe-page-container parte-${parteId}`}>
      <div className="parte-detalhe-page-voltar-container">
        <Link to="/partes" className="parte-detalhe-page-btn-voltar">
          ⟵ Escolher Outra Parte
        </Link>
      </div>

      <div className="parte-detalhe-page-titulo">
        <h1>{parte.parte_anime} - {parte.titulo}</h1>
      </div>

      <section className="parte-detalhe-page-secao">
        <div className="parte-detalhe-page-secao-titulo">
          <h2>Personagens</h2>
        </div>

        <div className="parte-detalhe-page-cards-grid">
          {personagensDaParte.map(p => (
            <ParteDetalheCard key={p.id} personagem={p} />
          ))}
        </div>
      </section>

      {standsDaParte.length > 0 && (
        <section className="parte-detalhe-page-secao">
          <h2 className="parte-detalhe-page-secao-titulo">Stands</h2>
          <div className="parte-detalhe-page-cards-grid">
            {standsDaParte.map(s => (
              <ParteDetalheCard key={s.id} stand={s} />
            ))}
          </div>
        </section>
      )}

      <ScrollTopButton />
    </main>
  );
}