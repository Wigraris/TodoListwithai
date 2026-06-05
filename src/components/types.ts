export interface Todo {
    id: number
    text: string
    completed: boolean
    
}
export interface Anime {
    mal_id: number
    title: string
    images: {
        jpg: {
            image_url: string
            }
    }
}
export interface Character {
    name: string
    mal_id: number
    title: string
    images: {
        jpg: {
            image_url: string
            }
    }
}