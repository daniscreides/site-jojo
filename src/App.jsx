import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

import Sobre from "./pages/Sobre";
import Partes from "./pages/Partes";
import ParteDetalhe from "./pages/ParteDetalhe";
import Pesquisa from "./pages/Pesquisa";
import JojoDetalhe from "./pages/JojoDetalhe";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/partes" element={<Partes />} />
          <Route path="/partes/:id" element={<ParteDetalhe />} />
          <Route path="/jojos/:id" element={<JojoDetalhe />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </main>

      <ScrollTopButton />
      <Footer />
    </div>
  );
}