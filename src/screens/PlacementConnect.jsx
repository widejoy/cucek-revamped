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
    // Navigate to profile completion page
    navigate('/complete-profile');
  };

  const handleEligibleClick = () => {
    // Navigate to eligible companies page
    navigate('/eligible-companies');
  };

  return (
    <Box
      p="6"
      borderRadius="md"
      maxW="400px"
      mx="auto"
      mt="8"
      bg="#f0f4f8"
      color="#2a4365"
      boxShadow="md"
      textAlign="center"
    >
      <Text fontSize="2xl" fontWeight="bold" mb="6">
        Placement Portal
      </Text>

      <HStack spacing="6" justify="center">
        <Button colorScheme="blue" onClick={handleProfileClick}>
          Complete Profile
        </Button>
        <Button colorScheme="green" onClick={handleEligibleClick}>
          Show Eligible Companies
        </Button>
      </HStack>
    </Box>
  );
}

export default PlacementConnect;