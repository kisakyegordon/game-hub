import useData from "./useData";
import type { Genre } from "./useGenres";

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

const useGames = (
  selectedGenre: Genre | null | undefined,
  selectedPlatform: Platform | null | undefined
) => {
  const url = "/games";
  return useData<Game>(
    url,
    {
      params: { genres: selectedGenre?.slug, platforms: selectedPlatform?.id },
    },
    [selectedGenre, selectedPlatform]
  );
};

export default useGames;
