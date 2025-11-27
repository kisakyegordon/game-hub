import type { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} fit="cover" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
