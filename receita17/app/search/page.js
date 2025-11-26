import SearchForm from "./SearchForm";

export default function MovieSearchPage() {
    return (
        <main style={{ padding: '20px' }}>
            <h1>🎥 Busca de Filmes (Mini-Desafio)</h1>
            <p>O formulário e os resultados estão na mesma página, e a submissão **não** recarrega o formulário.</p>
            <SearchForm />
        </main>
    );
}