import { Button, Box, Image, Text } from "@chakra-ui/react";

import VrLogo from "../../assets/images/vr-logo.svg";
import VrBag from "../../assets/images/vr-bag.svg";

interface HeaderProps {
  onOpenCart: () => void;
}

export function Header({ onOpenCart }: HeaderProps) {
  return (
    <Box
      as="header"
      backgroundColor="brand.100"
      display="flex"
      justifyContent="space-between"
      padding="1.6rem 3rem"
    >
      <Image src={VrLogo} alt="logo da empresa Vale Refeição na cor branca" />
      <Button
        backgroundColor="gray.900"
        width="auto"
        height="32px"
        borderRadius="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={onOpenCart}
      >
        <Image src={VrBag} alt="Ícone de uma sacola de compras na cor branca" />
        <Text color="white" fontSize="xl">
          0
        </Text>
      </Button>
    </Box>
  );
}
