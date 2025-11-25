export default async function Page() {

    const res = await fetch("https://api.jikan.moe/v4/anime?q=naruto", {
      cache: "no-store"
    });
  
    const data = await res.json();
  
    return (
      <div>
        {data.data.map((anime) => (
          <div key={anime.mal_id}>
            {anime.title} --- {anime.year}
          </div>
        ))}
      </div>
    );
  }
  