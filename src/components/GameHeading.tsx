import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery | null;
}

function GameHeading({ gameQuery }: Props) {
  let currentHeader = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;
  //   gameQuery?.platform ? (currentHeader += gameQuery?.platform.name + " ") : "";
  //   gameQuery?.genre ? (currentHeader += gameQuery?.genre.name + " ") : "";
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {currentHeader}
    </Heading>
  );
}

export default GameHeading;
