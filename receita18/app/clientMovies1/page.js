"use client"

import { useState } from "react"

export default function Home(){
    const [resultMovies, setResultMovies] = useState([]);
    
    const [searchKey, setSearchKey] = useState(""); 

    async function handleAction(formData){
        const titleSearchKey = formData.get("titleSearchKey");
        
        setSearchKey(titleSearchKey); 
        
        const apiKey = "f1cbc41e"; 
        
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titleSearchKey}`);
        
        const jsonRes = await httpRes.json();
        
        setResultMovies(jsonRes.Search || []);
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>🎥 Pesquisa de Filmes (Client Component com useState)</h1>
            <p>O formulário agora mantém o valor após a pesquisa.</p>
            
            <MovieForm handleAction={handleAction} currentSearchKey={searchKey} />
            
            <hr/>

            <h2>Tabela de Resultados</h2>
            <MovieTable movies={resultMovies}/>
        </div>
    );
}

export function MovieForm({ handleAction, currentSearchKey }){
    return (
        <form action={handleAction} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', display: 'inline-block' }}>
            <label htmlFor="idTitleSearchKey" style={{ marginRight: '10px' }}>**Título:**</label>
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey"
                defaultValue={currentSearchKey}
                style={{ padding: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                required
            />
            <button 
                type="submit"
                style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Pesquisar
            </button>
        </form>
    );
}


export function MovieTable({ movies }){
    return (
        <div style={{ marginTop: '20px' }}>
            {movies.length > 0 ? (
                <div style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#f9f9f9' }}>
                    <h4 style={{ margin: '0 0 10px 0' }}>Filmes Encontrados ({movies.length}):</h4>
                    {movies.map( (m) => (
                        <div key={m.imdbID} style={{ padding: '5px 0', borderBottom: '1px dotted #ccc' }}>
                            **{m.Title}** --- {m.Year}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum filme encontrado ou a pesquisa ainda não foi realizada.</p>
            )}
        </div>
    );
}