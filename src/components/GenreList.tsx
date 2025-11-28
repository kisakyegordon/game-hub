import useGenres from "../hooks/useGenres";

function GameGenres() {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGenres;
