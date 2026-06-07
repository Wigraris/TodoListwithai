import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
    <nav className='bg-gray-800 px-8 py-4 flex gap-8 '>
        <Link className='hover:bg-sky-700 text-white' to ='/'>Главная</Link>
        <Link className='hover:bg-sky-700 text-white' to='/anime'> Каталог</Link>
        <Link className='hover:bg-sky-700 text-white' to='/TopCharacters'> Топ персонажей</Link>
    </nav>)
    
}