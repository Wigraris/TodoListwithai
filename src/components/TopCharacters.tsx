import { useEffect, useState } from "react";

export default function Character(){
    const controller = new AbortController()
    const [Character, setCharacter] = useState([])
    const [Loading, isLoading] = useState(true)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/top/characters?limit=6', {signal: controller.signal})
        .then(element => element.json())
        .then(char => setCharacter(char.data))
        .then(() => isLoading(false))
    }, [controller.signal])
    return(
        <div>
            {Loading ? <p> Loading...</p>: Character.map((step) =>
            <div key={step.mal_id}> 
            <img className = 'h-32 w-32 align-content' src = {step.images.jpg.image_url}/>
            <p>{step.name}</p>
            </div>
             )}
        </div>
    )
}