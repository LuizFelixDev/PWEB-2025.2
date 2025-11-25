import { Saudacao } from "../../../components/Saudacao";

export default function SubRotaPage() {
  return (
    <div style={{ backgroundColor: '#e6f7ff', padding: '10px' }}>
      <h1>Esta é a Sub-rota Aninhada</h1>
      
      <p>O URL para esta página é: /novarota/subrota</p>

      <Saudacao nome="Sub Rota Feliz" />
      
      <p>Esta página está aninhada dentro de 2 Layouts.</p>
    </div>
  );
}