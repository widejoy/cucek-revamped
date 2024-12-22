import React from "react";
import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { useNavStore } from "../../store/globalState"; // Import Zustand store
import Menu from "./menu"; // Import your menu component

const GlobalAppBar = () => {
  const toggleMenu = useNavStore((state) => state.toggleMenu); // Access toggle function
  const isMenuOpen = useNavStore((state) => state.isMenuOpen); // Access menu state

  return (
    <>
      <Box as="header" bg="black" color="white" px={4} py={2}>
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Flex align="center">
            <Image
              src="logo.png"
              alt="CUCEK Logo"
              h="40px"
              mr={4}
              style={{ filter: "invert(1)" }}
            />
          </Flex>

          {/* Centered Title */}
          <Flex align="center" justify="center" flex={1}>
            <Text fontWeight="bold" fontSize="lg">
              CUCEK
            </Text>
          </Flex>

          {/* Menu Button */}
          <IconButton
            aria-label="Menu"
            variant="ghost"
            colorScheme="whiteAlpha"
            onClick={toggleMenu} // Toggle menu visibility
          >
            <MenuIcon color="white" />
            <Text ml={2} color="white">
              Menu
            </Text>
          </IconButton>
        </Flex>
      </Box>

      {/* Conditionally Render Menu */}
      {isMenuOpen && <Menu />}
    </>
  );
};

export default GlobalAppBar;
