"use client"

import {searchMovies} from "../actions/movieActions"
import {useState} from "react" 

export default function Home(){
    const [dataResult, setDataResult] = useState({})

    async function handleAction(formData){
        const res = await searchMovies(formData)
        setDataResult(res)
    }

    const movies = dataResult.Search || []; 

    return (
        <div style={{ padding: '20px' }}>
            <h1>🎥 Pesquisa com Server Actions</h1>
            <p>O formulário agora envia a chave de título e o ano para a Server Action.</p>
            
            <MovieForm actionHandler={handleAction}/>
            
            <hr/>
            {dataResult.error && <p style={{color: 'red'}}>Erro: {dataResult.error}</p>}
            {movies.length > 0 && <MovieTable movies={movies}/>}
            {movies.length === 0 && !dataResult.error && <p>Nenhum filme encontrado. Tente pesquisar por um título.</p>}
        </div>
    );
}

export function MovieForm({actionHandler}){
    return (
        <form action={actionHandler} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', display: 'inline-block' }}>
            
            <div style={{marginBottom: '10px'}}>
                <label htmlFor="idTitleSearchKey" style={{ marginRight: '10px' }}>**Título:**</label>
                <input 
                    id="idTitleSearchKey" 
                    name="titleSearchKey"
                    style={{ padding: '5px', border: '1px solid #ccc' }}
                    required
                />
            </div>
            
            <div style={{marginBottom: '15px'}}>
                <label htmlFor="idYearSearchKey" style={{ marginRight: '10px' }}>**Ano:**</label>
                <input 
                    id="idYearSearchKey" 
                    name="yearSearchKey" 
                    type="number"
                    placeholder="Ex: 2024"
                    style={{ padding: '5px', border: '1px solid #ccc' }}
                />
            </div>

            <button 
                type="submit"
                style={{ padding: '6px 12px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}
            >
                Pesquisar
            </button>
        </form>
    );
}

export function MovieTable({movies}){
    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ border: '1px solid #000', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <h4 style={{ margin: '0 0 10px 0' }}>Filmes Encontrados ({movies.length}):</h4>
                {movies.map( (m) => (
                    <div key={m.imdbID} style={{ padding: '5px 0', borderBottom: '1px dotted #ccc' }}>
                        **{m.Title}** --- {m.Year}
                    </div>
                ))}
            </div>
        </div>
    );
}