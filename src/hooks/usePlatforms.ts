import useData from "./useData";
import type { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
