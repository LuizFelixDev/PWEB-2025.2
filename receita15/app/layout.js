import "./globals.css";

export const metadata = {
  title: "PWEB 2025.2 - Receita 15",
  description: "Demonstração de Layouts Aninhados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
          <nav>
            <a href="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="/novarota" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Nova Rota</a>
            <a href="/novarota/subrota" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Sub-rota</a>
          </nav>
        </div>
        
        <main style={{ padding: '20px' }}>
            {children}
        </main>
      </body>
    </html>
  );
}