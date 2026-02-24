const imagens = import.meta.glob(
  "/src/assets/imagens/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

export function importarImagens(tipo) {
  const resultado = {};

  for (const caminho in imagens) {
    if (!caminho.includes(`/imagens/${tipo}/`)) continue;

    const nomeArquivo = caminho
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "");

    resultado[nomeArquivo] = imagens[caminho];
  }

  return resultado;
}