import {
  Drawer as DrawerChakraUi,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { Product } from "../Product";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <DrawerChakraUi
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={{ base: "full", md: "xl" }}
    >
      <DrawerOverlay />
      <DrawerContent padding="3rem">
        <DrawerCloseButton size="lg" margin="10px 10px" />
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          borderBottom="1px"
          borderColor="#ddd"
          margin="20px 0 20px"
        >
          <Text fontSize="2.2rem" fontWeight="bold">
            Compras
          </Text>
          <Text fontSize="2.2rem" fontWeight="normal">
            2
          </Text>
        </DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" alignItems="center">
          <Product />
          <Product />
          <Product />
          <Box
            as="footer"
            borderTop="1px"
            borderColor="#dddd"
            marginTop="40px"
            display="flex"
            justifyContent="space-between"
            paddingTop="15px"
            width="100%"
          >
            <Button
              backgroundColor="brand.100"
              color="white"
              borderRadius="50px"
              size="lg"
              padding="10px"
              _hover={{ backgroundColor: "brand.200" }}
            >
              Concluir compras
            </Button>
            <Button
              variant="outline"
              size="lg"
              mr={3}
              onClick={onClose}
              border="none"
            >
              Cancelar
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </DrawerChakraUi>
  );
}
