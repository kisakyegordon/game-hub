import type { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  image_background: string;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  metacritic: number;
  name: string;
  rating: number;
  background_image: string;
  platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery | null) => {
  const url = "/games";
  return useData<Game>(
    url,
    {
      params: {
        genres: gameQuery?.genre?.slug,
        platforms: gameQuery?.platform?.id,
        // ordering: '-rating'
        ordering: gameQuery?.sortOrder,
      },
    },
    [gameQuery]
  );
};

export default useGames;
