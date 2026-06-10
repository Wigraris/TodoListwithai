import { useEffect, useState } from 'react'
import {ApiAnime} from '../services/animeApi'
import {Anime} from '../types'
import MediaCard from './MediaCard'
export default function AnimeTierList() {
    const [animeList, setAnime] = useState<Anime[]>([])
    const [loading, setLoading] = useState(true)
    const [errror, setError] = useState<string | null>(null)
    useEffect(()=> {
        const controller = new AbortController()
        async function loadData(){
            try{
            const Load = await ApiAnime(controller.signal)
            setAnime(Load)
            setLoading(false)}
            catch(err: any) {
                if (err.name === 'AbortError'){
                    console.log('Запрос отменен')
                    return 
                }
                setLoading(false)
                return setError('Ошибка загрузки' + err.message)
            }
        }
        loadData()
        return () => controller.abort()
    }, [])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 min-h-screen bg-gray-800" >
            <div className="grid grid-cols-3 gap-4">
                {loading ? <p>Загрузка...</p>: errror ?<p>{errror}</p> :animeList?.map((anime) => (
                <MediaCard title={anime.title} key={anime.mal_id} image_url={anime.images.jpg.image_url} /> ))}
        </div>
        </div>
    )
}