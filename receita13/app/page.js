export function WelcomeTitle() {
    return <h1 style={{ color: "blue" }}>Bem-vindo ao app!</h1>;
  }
  
  export function InfoBox() {
    return (
      <div style={{
        padding: "12px",
        background: "#f1f1f1",
        borderRadius: "8px",
        marginTop: "10px"
      }}>
        <p>Componente exportado normalmente.</p>
      </div>
    );
  }
  
  export default function Home() {
    return (
      <main style={{ padding: "20px" }}>
        <WelcomeTitle />
        <InfoBox />
      </main>
    );
  }
  