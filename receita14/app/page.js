import { MariaPrea, Saudacao } from "../components/Saudacao"; 

export default function NovaRotaHome(){
    return (
        <main style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h1>Página Principal da Nova Rota</h1>
            
            <hr/>
            
            <Saudacao nome="Luiz P. Web"/>
            
            <MariaPrea mensagem="Morreu Maria Preá, mas ressuscitou para o Next.js!"/>
            
            <Saudacao /> 

            <hr/>
            
            <h2>Caminho: /novarota</h2>
        </main>
    );
}