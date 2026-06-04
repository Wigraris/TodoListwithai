import {Routes,Route} from 'react-router-dom'
import Main from './components/Main'
import AnimeTierList from './components/Anime'
import Navbar from './components/Navbar'
import Character from './components/TopCharacters'
export default function Deploy(){
    return(<>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/anime' element={<AnimeTierList/>}/>
            <Route path='/TopCharacters' element={<Character/>}/>
        </Routes>
        </>)
}