import { useNavigate } from "react-router"

export default function Main(){
    const navigate = useNavigate()
    return(<div className="bg-gray-950 px-8 py-16">
        <button className="text-white" onClick={() => navigate('/anime')}>Навигация к аниме</button>
    </div>)
}