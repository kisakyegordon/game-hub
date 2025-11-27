import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  console.log(color)
  return (
    <Badge
      colorPalette={color}
      fontSize="14px"
      paddingX={1.5}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
