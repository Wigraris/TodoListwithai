import { useEffect, useState } from 'react'
import {ApiAnime} from '../services/animeApi'
import {Anime} from '../types'
export default function AnimeTierList() {
    const [animeList, setAnime] = useState<Anime[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        const controller = new AbortController()
        async function loadData(){
            const Load = await ApiAnime(controller.signal)
            setAnime(Load)
            setLoading(false)
        }
        loadData()
        return () => controller.abort()
    }, [])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 min-h-screen bg-grey-800" >
            <div className="grid grid-cols-3 gap-4">
                {loading ? <p>Загрузка...</p>: animeList.map((anime) => (
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