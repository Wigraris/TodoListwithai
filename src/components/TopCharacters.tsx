import { useEffect, useState } from "react";
import {Character} from '../types'
import { ApiCharacter } from "../services/characterApi";
import MediaCard from "./MediaCard";
export default function Character(){
    
    const [characterList, setCharacter] = useState<Character[]>([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        async function loadDataCharacter(){
            const LoadCharacter = await ApiCharacter(controller.signal)
            setCharacter(LoadCharacter)
            setLoading(false)
        }
        loadDataCharacter()
        return () => controller.abort()
    }, [])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 min-h-screen bg-gray-800">
            {Loading ? <p> Loading...</p>: characterList.map((step) => (
            <MediaCard key={step.mal_id} title={step.name} image_url={step.images.jpg.image_url}/>
             ))}
        </div>
    )
}//fetch('https://api.jikan.moe/v4/top/characters?limit=6', {signal: controller.signal})
//.then(element => element.json())
        // .then(char => setCharacter(char.data))
        // .then(() => isLoading(false))
        // return () => controller.abort()