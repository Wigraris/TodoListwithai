export async function ApiCharacter(signal: AbortSignal){
    try{
        const Fetch = await fetch('https://api.jikan.moe/v4/top/characters?limit=6',{signal})
        if(!Fetch.ok){
            throw new Error('Не удалось обработать запрос')
        }
        const Jso = await Fetch.json()
        return Jso.data
    }catch(ere){
        console.log(ere)
        throw ere
    }
}