import { useEffect, useState } from "react";
import {Character} from '../types'
import { ApiCharacter } from "../services/characterApi";
export default function Character(){
    
    const [characterList, setCharacter] = useState<Character[]>([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        async function loadDataCharacter(){
            const LoadCharacter = await ApiCharacter(controller.signal)
            setCharacter(LoadCharacter)
        }
        loadDataCharacter()
        setLoading(false)
        return () => controller.abort()
    }, [])
    return(
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 min-h-screen bg-grey-800">
            {Loading ? <p> Loading...</p>: characterList.map((step) => (
            <div key={step.mal_id}> 
            <div className="flex flex-col items-center justify-center  bg-gray-950 text-white"> 
                <img src = {step.images.jpg.image_url}/>
            </div>
            <p className="flex flex-col items-center justify-center bg-gray-950 text-white">{step.name}</p>
            </div>
             ))}
        </div>
    )
}//fetch('https://api.jikan.moe/v4/top/characters?limit=6', {signal: controller.signal})
//.then(element => element.json())
        // .then(char => setCharacter(char.data))
        // .then(() => isLoading(false))
        // return () => controller.abort()