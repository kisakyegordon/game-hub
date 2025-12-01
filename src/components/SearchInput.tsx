import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
