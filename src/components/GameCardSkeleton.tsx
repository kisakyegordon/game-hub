import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card.Root width="400px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
