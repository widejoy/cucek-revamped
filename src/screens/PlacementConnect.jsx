import React from 'react';
import {
  Box,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function PlacementConnect() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/placement-profile');
  };

  const handleEligibleClick = () => {
    navigate('/placement-application');
  };

  return (
    <Box
      bg="#000"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="sans-serif"
      px="4"
    >
      <Box
        p="10"
        borderRadius="2xl"
        maxW="500px"
        w="100%"
        bg="#111"
        color="white"
        boxShadow="0 0 25px rgba(255, 255, 255, 0.05)"
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" mb="6">
          Placement Portal
        </Text>

        <HStack spacing="6" justify="center">
          <Button
            bg="#3182ce"
            _hover={{ bg: "#2c5282" }}
            color="white"
            onClick={handleProfileClick}
          >
            Complete Profile
          </Button>
          <Button
            bg="#38a169"
            _hover={{ bg: "#2f855a" }}
            color="white"
            onClick={handleEligibleClick}
          >
            Show Eligible Companies
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default PlacementConnect;
