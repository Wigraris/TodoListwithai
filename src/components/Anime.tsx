import { useEffect, useState } from "react"

export default function AnimeTierList() {
    const controller = new AbortController()
    const [Anime, setAnime] = useState<any[]>([])
    const [Load, isLoad] = useState(true)
    useEffect(() => {
        fetch('https://api.jikan.moe/v4/top/anime?limit=6', {signal: controller.signal})
            .then(response => response.json())
            .then(json => setAnime(json.data))
            .then(() => isLoad(false))
            .catch(error => console.error('Ошибка '+ error))} 
        ,[controller.signal])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-green-" >
            <div className="">
                {Load ? <p>Загрузка...</p>: Anime.map((anime) => (
                <div key = {anime.mal_id}> 
                <div className="">
                    <img src={anime.images.jpg.image_url}/>
                </div>
                <p className="dark:text-white">{anime.title}</p>
                </div> ))}
        </div>
        </div>
    )
}