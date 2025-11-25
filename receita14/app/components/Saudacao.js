export function Saudacao({ nome }) {
    const nomePadrao = nome || "Visitante Desconhecido"; 
  
    return (
      <p style={{ color: 'navy', border: '1px solid #ccc', padding: '10px' }}>
        Olá, **{nomePadrao}**! Seja bem-vindo(a) à Nova Rota.
      </p>
    );
  }
  
  export function MariaPrea({ mensagem }) {
      return (
          <div style={{ fontWeight: 'bold', color: 'red' }}>
              Notícia: {mensagem}
          </div>
      );
  }