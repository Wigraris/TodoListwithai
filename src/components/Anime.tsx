import { useEffect, useState } from "react"
import {Anime} from './types'
export default function AnimeTierList() {
    const [Anime, setAnime] = useState<Anime[]>([])
    const [Load, isLoad] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        fetch('https://api.jikan.moe/v4/top/anime?limit=6', {signal: controller.signal})
            .then(response => response.json())
            .then(json => setAnime(json.data))
            .then(() => isLoad(false))
            .catch(error => console.error('Ошибка '+ error))
        return () => controller.abort()} 
        ,[])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 min-h-screen bg-grey-800" >
            <div className="grid grid-cols-3 gap-4">
                {Load ? <p>Загрузка...</p>: Anime.map((anime) => (
                <div key = {anime.mal_id}> 
                <div className="flex flex-col items-center justify-center  bg-gray-950 text-white">
                    <img src={anime.images.jpg.image_url}/>
                </div>
                <p className="flex flex-col items-center justify-center  bg-gray-950 text-white">{anime.title}</p>
                </div> ))}
        </div>
        </div>
    )
}