import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "../hooks/useGames";
import { Icon } from "@chakra-ui/react/icon";
import type { IconType } from "react-icons";
import { HStack } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    "ps-vita": BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
