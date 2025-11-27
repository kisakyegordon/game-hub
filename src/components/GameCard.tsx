import React from "react";
import type { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root  borderRadius={10} overflow="hidden">
        <Image src={game.background_image} fit='cover' />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
}

export default GameCard;
