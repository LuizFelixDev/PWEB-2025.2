export default function NovaRotaLayout({ children }) {
    return (
      <section style={{ border: '2px dashed blue', padding: '15px', marginTop: '20px' }}>
        <h2>LAYOUT INTERMEDIÁRIO: Rota '/novarota'</h2>
        
        <p style={{ fontStyle: 'italic', color: 'blue' }}>
          Este cabeçalho aparece em todas as sub-rotas de novarota.
        </p>
  
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          {children}
        </div>
      </section>
    );
  }