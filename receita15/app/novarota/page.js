// receita15/app/novarota/page.js

import { MariaPrea, Saudacao } from "../components/Saudacao"; 

export default function NovaRotaHome(){
    return (
        <main style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
            <h1>Página Principal da Nova Rota</h1>
            
            <Saudacao nome="Luiz P. Web"/>
            
            <MariaPrea mensagem="Morreu Maria Preá, mas ressuscitou para o Next.js!"/>
            
            <Saudacao /> 

            <h2>Conteúdo da Rota: /novarota</h2>
        </main>
    );
}