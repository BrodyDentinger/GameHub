import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// From Rawg Games API Endpoint
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

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

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });
            
        
      return () => controller.abort();
    }, []);

    return {games, error, isLoading}
}

export default useGames;