import {MediaCardProps} from '../types'
export default function MediaCard({title,image_url,}: MediaCardProps){
    return (
        <div>
            <img src={image_url} />
        <p>{title}</p></div>)
}