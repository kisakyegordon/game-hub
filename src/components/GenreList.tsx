import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectGenre:  (genre: Genre) => void;
  selecteGenre: Genre | null | undefined;
}

function GenreList({onSelectGenre, selecteGenre}: Props) {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item listStyle="none" key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button fontWeight={genre.id === selecteGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize="lg" variant='plain'>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
