import { Saudacao } from "./components/Saudacao";

export default function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à Home da Receita 15</h1>
      <p>O menu acima veio do `RootLayout`.</p>
      <Saudacao nome="Página Inicial" />
    </div>
  );
}