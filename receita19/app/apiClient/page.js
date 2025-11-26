"use client"; 

import { useState } from 'react';

export default function SearchMoviesPage() {
    const [titleSearchKey, setTitleSearchKey] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!titleSearchKey) return;

        setIsLoading(true);
        setError(null);
        setMovies([]);

        try {
            const res = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}`);
            
            if (!res.ok) {
                throw new Error('Falha ao buscar filmes através da API interna.');
            }

            const data = await res.json();
        
            if (data.Response === "True") {
                setMovies(data.Search || []);
            } else {
                setError(data.Error || 'Nenhum filme encontrado.');
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>🎬 Busca de Filmes (Via API Própria)</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={titleSearchKey}
                    onChange={(e) => setTitleSearchKey(e.target.value)}
                    placeholder="Digite o título do filme"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>

            <hr />

            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
            
            {movies.length > 0 && (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.imdbID}>
                            <strong>{movie.Title}</strong> ({movie.Year})
                        </li>
                    ))}
                </ul>
            )}
            
            {!isLoading && !error && movies.length === 0 && titleSearchKey && (
                <p>Use a busca acima para encontrar filmes.</p>
            )}
        </div>
    );
}