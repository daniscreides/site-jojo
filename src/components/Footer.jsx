import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>SITE JOJO'S</h3>
          <p>Projeto dedicado ao anime JoJo’s Bizarre Adventure.</p>
        </div>

        <div className="footer-col">
          <h4>CRÉDITOS OBRA</h4>
          <p>Obra criada por{" "}
            <a
              href="https://pt.wikipedia.org/wiki/Hirohiko_Araki"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Hirohiko Araki.
            </a>
            </p>
        </div>

        <div className="footer-col">
          <h4>CRÉDITOS IMAGENS & INFORMAÇÕES</h4>
          <p>Informações retiradas da{" "}
            <a
              href="https://jojowiki.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              JoJo's Bizarre Encyclopedia.
            </a>
          </p>
        </div>

        <div className="footer-col">
          <h4>DESENVOLVEDOR</h4>
          <p>Projeto desenvolvido por Daniscreides.</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Site JoJo's — Todos os direitos reservados
      </div>
    </footer>
  );
}