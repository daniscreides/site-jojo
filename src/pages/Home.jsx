import "../styles/Home.css";
import { jojos } from "../data/jojos";
import JojoCard from "../components/JojoCard";

export default function Home() {
  const jojosHomeIds = [1, 2, 3, 4, 5, 6];

  const jojosHome = jojos.filter(j =>
    jojosHomeIds.includes(j.id)
  );

  return (
    <main className="home-page-container">
      <section className="home-page-titulo">
        <h1>JoJo&apos;s Bizarre Adventure</h1>
        <p className="home-page-descricao">
          SEIS JOJO'S, SEIS JORNADAS, UM DESTINO BIZARRO!
        </p>
      </section>

      <section className="home-page-cards">
        {jojosHome.map(jojo => (
          <JojoCard key={jojo.id} jojo={jojo} />
        ))}
      </section>
    </main>
  );
}