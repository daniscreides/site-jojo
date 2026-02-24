import { useEffect, useState } from "react";
import "../styles/ScrollTopButton.css";

export default function ScrollTopButton() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisivel(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visivel) return null;

  return (
    <button
      className="btn-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}