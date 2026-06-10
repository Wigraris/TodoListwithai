import {MediaCardProps} from '../types'
export default function MediaCard({title,image_url,}: MediaCardProps){
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-950 text-white">
            <img src={image_url} />
        <p>{title}</p></div>)
}//Props-переиспользуемый компонент