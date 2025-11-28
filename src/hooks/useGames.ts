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

const useGames = () => useData<Game>("/games");

export default useGames;
