import github from "../assets/imagens/github.png";
import linkedin from "../assets/imagens/linkedin.png";
import gmail from "../assets/imagens/gmail.png";
import "../styles/Sobre.css";

export default function Sobre() {
  return (
    <main className="sobre-page">
      <section className="sobre-container">
        <h1>SOBRE</h1>

        <p>
          Este projeto é uma aplicação dedicada ao universo de
          <strong> JoJo’s Bizarre Adventure</strong>. Reunindo personagens,
          partes e stands de forma organizada e acessível. Todas as informações
          foram retiradas da{" "}
          <a
            href="https://jojowiki.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sobre-link"
          >
            JoJo's Bizarre Encyclopedia
          </a>.
        </p>

        <p>
          JoJo’s Bizarre Adventure é uma obra criada por{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Hirohiko_Araki"
            target="_blank"
            rel="noopener noreferrer"
            className="sobre-link"
          >
            Hirohiko Araki
          </a>
          , iniciada originalmente como mangá em <strong>1987</strong>. A franquia
          ganhou adaptações ao longo dos anos, incluindo OVAs lançadas entre
          <strong> 1993 e 2000</strong>, além de sua adaptação oficial para anime de TV,
          iniciada em <strong>2012</strong>. A obra também conta com diversos spin-offs,
          light novels e especiais, sendo reconhecida por seus personagens marcantes,
          estilos únicos e narrativas ousadas.
        </p>

        <p>
          O site foi desenvolvido com foco em aprendizado, organização de dados e
          prática de desenvolvimento.
        </p>

        <div className="sobre-social">
          <div className="creditos-sobre">
            <p>Desenvolvido por Daniscreides.</p>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/daniscreides"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/daniscreides"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>

            <a href="mailto:danielisouza436@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="Email" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
