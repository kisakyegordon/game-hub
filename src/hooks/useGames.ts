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
  rating_top: number;
}

const useGames = (gameQuery: GameQuery | null) => {
  const url = "/games";
  return useData<Game>(
    url,
    {
      params: {
        genres: gameQuery?.genre?.slug,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText
      },
    },
    [gameQuery]
  );
};

export default useGames;
