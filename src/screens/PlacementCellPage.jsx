import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';

const PlacementCellPage = () => {
  return (
    <Container maxW="container.xl" py={10}>
      {/* Header */}
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4} color="blue.700">
          Placement Cell - CUSAT (Cucek)
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Empowering students with opportunities for a brighter future.
        </Text>
      </Box>

      {/* Placement Stats Section */}
      <Box mb={10}>
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.600">
          Placement Stats
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={6}>
          <StatCard label="Total Offers" value="120+" />
          <StatCard label="Top Recruiters" value="TCS, IBM, EY, Accenture" />
          <StatCard label="Highest Package" value="8 LPA" />
          <StatCard label="Average Package" value="6 LPA" />
        </SimpleGrid>
      </Box>


      {/* Top Recruiters Section */}
      <Box mb={10}>
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.600">
          Our Top Recruiters
        </Heading>
        <SimpleGrid columns={[2, 3, 5]} spacing={6}>
          {['ibm.png', 'tcs.png', 'vistion.png', 'ey.png', 'cognizant.png'].map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt="Recruiter Logo"
              boxSize="80px"
              objectFit="contain"
              mx="auto"
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box>
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.600">
          Contact Us
        </Heading>
        <VStack spacing={4} align="start">
          <Text fontSize="lg" color="gray.700">
            <strong>Email:</strong> cpo@cusat.ac.in
          </Text>
          <Text fontSize="lg" color="gray.700">
            <strong>Phone:</strong> +91-9447054074
          </Text>
          <Text fontSize="lg" color="gray.700">
            <strong>Address:</strong> CUSAT, School of Engineering, Pulincunnu, Alappuzha, Kerala.
          </Text>
        </VStack>
        <HStack mt={4} spacing={4}>
          <Button colorScheme="blue" variant="solid">
            Send an Email
          </Button>
          <Button colorScheme="teal" variant="solid">
            Visit Campus
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

const StatCard = ({ label, value }) => {
  return (
    <Box
      p={6}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="md"
      textAlign="center"
      bg="white"
      boxShadow="md"
    >
      <Heading as="h3" size="md" mb={2} color="blue.800">
        {value}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </Box>
  );
};

export default PlacementCellPage;
