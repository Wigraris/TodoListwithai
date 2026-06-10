export async function ApiAnime(signal?: AbortSignal){
    try{
        const steponeFetch = await fetch('https://api.jikan.moe/v4/top/anime', {signal})
        if(!steponeFetch.ok){
            throw new Error('Не удалось обработать запрос')
        }
        const steptwoJson = await steponeFetch.json()
        return steptwoJson.data
    }
    catch(error){
        throw error
    }
}