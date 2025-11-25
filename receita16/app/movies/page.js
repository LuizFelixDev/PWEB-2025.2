"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.jikan.moe/v4/anime?q=naruto");
      const data = await res.json();
      setAnimes(data.data); 
    }

    load();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {animes.map((anime) => (
        <div key={anime.mal_id} style={{ marginBottom: "20px" }}>
          <h3>
            {anime.title} ({anime.year})
          </h3>

          <img
            src={anime.images.jpg.image_url}
            width={200}
            style={{ borderRadius: "10px" }}
            alt={anime.title}
          />
        </div>
      ))}
    </div>
  );
}
