export function QualquerPagina() {
  
  // 🧠 1. ÁREA DO CÉREBRO (Lógica)
  const saudacao = "Olá, bem-vindo!";
  
  const clicarNoBotao = () => {
    console.log("O usuário clicou!");
  };

  // 👁️ 2. ÁREA DO ROSTO (Visual)
  return (
    <div>
      <h1>{saudacao}</h1>
      <button onClick={clicarNoBotao}>Clique aqui</button>
    </div>
  );
}