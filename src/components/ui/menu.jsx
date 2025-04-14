import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useNavStore } from "../../store/globalState";

const Menu = () => {
  const [bgImage, setBgImage] = useState(""); // State for the background image
  const [selectedItem, setSelectedItem] = useState(""); // State to track selected menu item
  const [submenuItems, setSubmenuItems] = useState([]); // State for submenu items
  const closeMenu = useNavStore((state) => state.closeMenu);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setSelectedItem(item);

    switch (item) {
      case "Home":
        closeMenu();
        navigate("/");
        break;
      case "About Us":
        closeMenu();
        navigate("/about-us");
        break;
      case "Login":
        closeMenu();
        navigate("/login");
        break;
      case "People":
        setBgImage("people.jpg");
        setSubmenuItems(["Faculty", "Non-Teaching Staff"]);
        break;
      case "Placement Connect":
        closeMenu();
        navigate("/placement-connect");
        break;
      case "Campus Life":
        setBgImage("campuslife.jpg");
        setSubmenuItems([
          "Hostels",
          "Anti Ragging Cell",
          "Grievance Redressal Cells",
          "Co-Teaching Committees",
          "Arts and Sports",
          "Library",
          "NSS Cell",
          "Placements",
          "PTA",
          "Gender Justice Committee",
        ]);
        break;
      case "Academics":
        setBgImage("academics.jpg")
        setSubmenuItems([
          "CSE",
          "CE",
          "EEE",
          "IT",
          "ME",
          "MCA",
          "Research",
          "Online Courses",
        ]);
        break;
      case "Alumni":
        setBgImage("alumini.jpg");
        closeMenu();
        navigate("/alumni");
        break;
      default:
        setBgImage("");
        setSubmenuItems([]);
        break;
    }
  };

  return (
    <Box
      position="fixed"
      inset="0"
      bg={bgImage ? "rgba(0, 0, 0, 0.8)" : "black"}
      bgImage={bgImage ? `url(${bgImage})` : "none"}
      bgSize="cover"
      bgPosition="center"
      color="white"
      zIndex="50"
      display="flex"
      flexDirection="column"
      p={6}
      transition="background 0.3s ease-in-out"
    >
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={6}>
        <Image src="logo.png" alt="Logo" h="50px" filter="invert(1)" />
        <Text
          onClick={closeMenu}
          fontSize="lg"
          fontWeight="bold"
          color="yellow.400"
          _hover={{
            color: "white",
            textDecoration: "underline",
            transform: "scale(1.1)",
          }}
          _active={{
            color: "yellow.500",
            transform: "scale(1.05)",
          }}
          cursor="pointer"
          transition="all 0.2s ease-in-out"
        >
          CLOSE ✖
        </Text>
      </Flex>

      {/* Main Menu Section */}
      <Flex flex="1" direction="row" gap={6}>
        {/* Main Menu */}
        <VStack
          spacing={6}
          align="flex-start"
          flex="1"
          borderRight="1px solid gray"
          pr={6}
        >
          {[
            "Home",
            "About Us",
            "People",
            "Campus Life",
            "Academics",
            "Alumni",
            "Login",
            "Placement Connect"
          ].map((item, index) => (
            <Text
              key={index}
              fontSize="2xl"
              fontWeight={selectedItem === item ? "bold" : "normal"}
              color={selectedItem === item ? "yellow.400" : "gray.300"}
              _hover={{
                color: "white",
                transform: "scale(1.05)",
                textDecoration: "underline",
              }}
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </Text>
          ))}
        </VStack>

        {/* Submenu */}

        {submenuItems.length > 0 && (
          <VStack spacing={4} align="flex-start" flex="2" pl={6}>
            {submenuItems.map((subitem, index) => (
              <Text
                key={index}
                fontSize="xl"
                fontWeight="normal"
                color="gray.300"
                _hover={{
                  color: "yellow.400",
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
                transition="all 0.3s ease-in-out"
                onClick={() => {
                  closeMenu(); // Close the menu
                  navigate(`/${subitem.toLowerCase().replace(/\s+/g, "-")}`); // Navigate to /name-of-submenu
                }}
              >
                {subitem}
              </Text>
            ))}
          </VStack>
        )}
      </Flex>
    </Box>
  );
};

export default Menu;
