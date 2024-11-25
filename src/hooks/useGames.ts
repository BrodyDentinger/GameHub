import useData from "./useData";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// From Rawg Game API Endpoint
export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = () => useData<Game>('/games'); 

export default useGames;