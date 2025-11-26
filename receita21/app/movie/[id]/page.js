import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
    const res = await fetch('http://www.omdbapi.com/?apikey=f1cbc41e&s=lady', { cache: 'force-cache' });
    
    if (!res.ok) {
        console.error("Failed to fetch movies for generateStaticParams");
        return []; 
    }
    
    const allMovies = await res.json();
    
    return allMovies.Search ? allMovies.Search.map((movie) => ({
        id: movie.imdbID,
    })) : [];
}

export default async function Home({ params }) {
    const { id } = params;

    const movie = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&i=${id}`).then(res => res.json());

    if (movie.Response === "False") {
        return notFound(); 
    }

    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            
            {movie.Poster && movie.Poster !== 'N/A' && (
                <Image
                    src={movie.Poster}
                    alt={`Poster do filme ${movie.Title}`}
                    width={300} 
                    height={450}
                    style={{ objectFit: "contain", marginBottom: '20px' }}
                    priority
                />
            )}
            
            <p><strong>Diretor:</strong> {movie.Director}</p>
            <p><strong>Enredo:</strong> {movie.Plot}</p>
        </div>
    );
};