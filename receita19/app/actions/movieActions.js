'use server'

export async function searchMovies(formData){
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey") 
    
    if (!titleSearchKey || titleSearchKey=='') return {Search: []}

    let url = `http://www.omdbapi.com/?apikey=ME_SUBSTITUA&s=${titleSearchKey}`;
    
    if (yearSearchKey && yearSearchKey.trim() !== '') {
        url += `&y=${yearSearchKey.trim()}`;
    }

    try{
        const httpRes = await fetch(url)
        const jsonRes = await httpRes.json()
        return jsonRes
    }catch(err){
        return {error: `Erro na requisição ${err}`}
    }
}