import { Box, Image, Text } from "@chakra-ui/react";

import VrProductDefault from "../../assets/images/vr-product-default.png";

export function Product() {
  return (
    <Box
      as="article"
      maxWidth="491px"
      width="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      border="1px"
      borderColor="brand.200"
      borderRadius="8px"
      padding="0.7rem 2rem"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="10px"
      _hover={{
        backgroundColor: "brand.300",
        transition: "0.2s all",
        color: "white",
      }}
    >
      <Box
        as="div"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        textAlign={{ base: "center" }}
        gap={{ base: "10px", md: "20px" }}
        width={{ base: "100%", md: "60%" }}
      >
        <Image src={VrProductDefault} width="53px" height="59px" />
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          width="100%"
          whiteSpace="nowrap"
        >
          Nome do produto
        </Text>
      </Box>
      <Text>R$ 00,00</Text>
    </Box>
  );
}
