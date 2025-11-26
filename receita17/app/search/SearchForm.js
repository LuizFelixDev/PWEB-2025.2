'use client'

import { useState } from 'react';

async function getMovies(title, year) {
    const params = new URLSearchParams({
        titleSearchKey: title, 
        yearSearchKey: year || '' 
    });

    console.log(`Simulando busca com Título: ${title} e Ano: ${year}`);
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    const mockResults = [
        { title: `${title} - O Filme (2020)`, year: '2020' },
        { title: `${title} - A Continuação (2022)`, year: '2022' },
        { title: `${title} - O Recomeço (2024)`, year: '2024' },
    ];

    const filteredResults = year 
        ? mockResults.filter(movie => movie.year === year)
        : mockResults;

    return { 
        results: filteredResults, 
        searchKey: { title, year },
        error: filteredResults.length === 0 ? "Nenhum resultado encontrado para os filtros." : null 
    };
}


export default function SearchForm() {
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target);
        const title = formData.get('titleSearchKey');
        const year = formData.get('yearSearchKey');
        
        if (!title.trim()) {
            setError("O campo Título não pode estar vazio.");
            setSearchResults(null);
            return;
        }

        setIsLoading(true);
        setError(null);
        setSearchResults(null);
        
        try {
            const data = await getMovies(title, year); 
            
            if (data.error) {
                setError(data.error);
            } else {
                setSearchResults(data.results);
            }

        } catch (err) {
            console.error("Erro ao buscar dados:", err);
            setError("Ocorreu um erro ao realizar a busca.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div>
            <h3>🎬 Formulário de Pesquisa 🎬</h3>
            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="idTitleSearchKey" style={{ display: 'block' }}>**Título:**</label>
                    <input 
                        id="idTitleSearchKey" 
                        name="titleSearchKey" 
                        required
                        style={{ width: '300px', padding: '5px' }}
                    />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="idYearSearchKey" style={{ display: 'block' }}>**Ano de Lançamento (Novo Campo):**</label>
                    <input 
                        id="idYearSearchKey" 
                        name="yearSearchKey" 
                        type="number"
                        placeholder="Ex: 2024"
                        style={{ width: '150px', padding: '5px' }}
                    />
                </div>
                
                <button type="submit" disabled={isLoading} style={{ padding: '8px 15px' }}>
                    {isLoading ? 'Pesquisando...' : '🔍 Pesquisar'}
                </button>
            </form>
            
            <hr/>

            <h2>Resultado da Pesquisa</h2>
            
            {isLoading && <p>Carregando resultados...</p>}
            
            {error && <p style={{ color: 'red' }}>**Erro:** {error}</p>}

            {searchResults && searchResults.length > 0 && (
                <div>
                    <h4>Filmes Encontrados ({searchResults.length}):</h4>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {searchResults.map((movie, index) => (
                            <li key={index} style={{ borderBottom: '1px dotted #eee', padding: '5px 0' }}>
                                **{movie.title}** (Ano: {movie.year})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {searchResults === null && !isLoading && !error && (
                <p>Use o formulário acima para iniciar uma pesquisa.</p>
            )}
        </div>
    );
}