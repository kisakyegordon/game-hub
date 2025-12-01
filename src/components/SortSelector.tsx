import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {"Order By: Relevance"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="relevance">Relevance</Menu.Item>
            <Menu.Item value="date">Date added</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value=""></Menu.Item>
            <Menu.Item value=""></Menu.Item>
            <Menu.Item value=""></Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
