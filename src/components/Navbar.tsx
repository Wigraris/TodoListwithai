import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
    <nav className='bg-gray-500 px-8 hover:bg-sky-700 sm:items-center'>
        <Link to ='/'>Главная</Link>
        <Link to='/anime'> Каталог</Link>
        <Link to='/TopCharacters'> Топ персонажей</Link>
    </nav>)
    
}