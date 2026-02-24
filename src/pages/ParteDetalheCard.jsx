import "../styles/ParteDetalheCard.css";
import { personagens } from "../data/personagens";
import { partes } from "../data/partes";
import { importarImagens } from "../utils/importarImagens";

const imagensPersonagens = importarImagens("personagens");
const imagensStands = importarImagens("stands");

export default function ParteDetalheCard({ personagem, stand }) {
  const item = personagem || stand;
  if (!item) return null;

  const parte = partes.find(p => p.id === item.parte_id);

  const usuario = stand
    ? personagens.find(p => p.id === stand.usuario)
    : null;

  const imagemSrc = personagem
    ? imagensPersonagens[item.imagem]
    : imagensStands[item.imagem];

  return (
    <article className="parte-detalhe-card-container">
    
      <div className="parte-detalhe-card-imagem">
        {imagemSrc ? (
          <img src={imagemSrc} alt={item.nome} />
        ) : (
          <div className="parte-detalhe-card-placeholder">
            Sem imagem
          </div>
        )}
      </div>

      <div className="parte-detalhe-card-info">
        <h3>{item.nome}</h3>

        {parte && <p>Parte: {parte.titulo}</p>}

        {personagem && (
          <>
            {item.tipo && <p>Tipo: {item.tipo}</p>}

            {item.is_jojo && item.idade && (
              <p>Idade: {item.idade} anos</p>
            )}

            {item.stand && <p>Stand: {item.stand}</p>}

            {item.habilidade && (
              <p>Habilidade: {item.habilidade}</p>
            )}
          </>
        )}

        {stand && (
          <>
            {item.habilidade && (
              <p>Habilidade: {item.habilidade}</p>
            )}

            <p>
              Usuário: {usuario ? usuario.nome : "Desconhecido"}
            </p>
          </>
        )}
      </div>
    </article>
  );
}