import { Saudacao } from "../../components/Saudacao";

export default function SubRotaPage() {
  return (
    <div style={{ backgroundColor: '#e6f7ff', padding: '20px' }}>
      <h1>Esta é a Sub-rota Aninhada</h1>
      
      <p>O URL para esta página é: /novarota/subrota</p>

      <hr/>

      <Saudacao nome="Sub Rota Feliz" />
      
      <p>Componente importado com sucesso.</p>
    </div>
  );
}