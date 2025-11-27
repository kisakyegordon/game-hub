import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <ColorModeButton color={colorMode} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
