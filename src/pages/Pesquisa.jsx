import { useLocation, Link } from "react-router-dom";
import { personagens } from "../data/personagens";
import { stands } from "../data/stands";
import ParteDetalheCard from "../pages/ParteDetalheCard";
import "../styles/Pesquisa.css";

export default function Pesquisa() {
  const { search } = useLocation();
  const query =
    new URLSearchParams(search).get("q")?.toLowerCase().trim() || "";

  const personagensFiltrados = personagens.filter(p =>
    p.nome.toLowerCase().includes(query)
  );

  const standsFiltrados = stands.filter(s =>
    s.nome.toLowerCase().includes(query)
  );

  const nenhumResultado =
    personagensFiltrados.length === 0 &&
    standsFiltrados.length === 0;

  return (
    <main className="pesquisa-page-container">

      <div className="pesquisa-page-voltar-container">
        <Link to="/" className="pesquisa-page-btn-voltar">
          ⟵ Início
        </Link>
      </div>

      <div className="pesquisa-page-titulo">
        <h1>Resultado para: "{query}"</h1>
      </div>

      <section className="pesquisa-page-secao">
        <div className="pesquisa-page-cards-grid">
          {personagensFiltrados.map(p => (
            <ParteDetalheCard key={`p-${p.id}`} personagem={p} />
          ))}

          {standsFiltrados.map(s => (
            <ParteDetalheCard key={`s-${s.id}`} stand={s} />
          ))}
        </div>

        {nenhumResultado && (
          <p className="pesquisa-sem-resultado">
            Nenhum personagem ou stand encontrado.
          </p>
        )}
      </section>
    </main>
  );
}