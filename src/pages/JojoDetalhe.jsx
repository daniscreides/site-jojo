import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/JojoDetalhe.css";
import { jojos } from "../data/jojos";
import { importarImagens } from "../utils/importarImagens";

const imagensJojos = importarImagens("jojos");

export default function JojoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const jojo = jojos.find(j => j.id === Number(id));

  useEffect(() => {
    if (!jojo) return;

    const classe = `parte-${jojo.parte_id}`;
    document.body.classList.add(classe);

    return () => {
      document.body.classList.remove(classe);
    };
  }, [jojo]);

  if (!jojo) {
    return (
      <main className="jojo-detalhe-page-container">
        <h1>JoJo não encontrado</h1>
      </main>
    );
  }

  const imagemPrincipal = imagensJojos[jojo.imagem];

  return (
    <main className={`jojo-detalhe-page-container parte-${jojo.parte_id}`}>

      <div className="jojo-detalhe-page-voltar-container">
        <button
          onClick={() => navigate("/")}
          className="jojo-detalhe-page-btn-voltar"
        >
          ⟵ Voltar
        </button>
      </div>

      <section className="jojo-detalhe-page-secao-parte">

        <article className="jojo-detalhe-page-card-detalhe">
          <div className="jojo-detalhe-page-img-card-detalhe">
            {imagemPrincipal && (
              <img src={imagemPrincipal} alt={jojo.nome} />
            )}
          </div>

          <div className="jojo-detalhe-page-card-detalhe-info">
            <div className="jojo-detalhe-page-titulo">
              <h1>{jojo.nome}</h1>
            </div>

            <p><strong>Parte:</strong> {jojo.parte}</p>
            {jojo.habilidade && <p><strong>Habilidade:</strong> {jojo.habilidade}</p>}
            {jojo.stand && <p><strong>Stand:</strong> {jojo.stand}</p>}
            <p><strong>Idade:</strong> {jojo.idade} anos</p>
            <p><strong>Aniversário:</strong> {jojo.aniversario}</p>
            <p><strong>Ano da história:</strong> {jojo.ano_historia}</p>
            <p><strong>Altura:</strong> {jojo.altura}</p>
            <p><strong>Peso:</strong> {jojo.peso}</p>
            <p><strong>Nacionalidade:</strong> {jojo.nacionalidade}</p>
          </div>
        </article>

        <aside className="jojo-detalhe-page-card-sobre">
          <h2>SOBRE</h2>
          <p>{jojo.texto}</p>
        </aside>

      </section>

      {jojo.imagens && jojo.imagens.length > 0 && (
        <section className="jojo-detalhe-page-secao-galeria">
          <h2>Galeria</h2>

          <div className="jojo-detalhe-page-galeria">
            {jojo.imagens.map((img, index) => {
              const src = imagensJojos[img];

              return (
                <div
                  className="jojo-detalhe-page-card-galeria"
                  key={index}
                >
                  {src ? (
                    <img
                      src={src}
                      alt={`${jojo.nome} ${index + 1}`}
                    />
                  ) : (
                    <p>Imagem não encontrada</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

    </main>
  );
}