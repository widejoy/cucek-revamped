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
import { Mail, Phone, MapPin, ArrowRightCircle } from 'lucide-react';

const NSSCellPage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      {/* Header */}
      <Box textAlign="center" mb={12}>
        <Heading
          as="h1"
          size="5xl"
          mb={4}
          color="blue.700"
          textTransform="uppercase"
          fontWeight="bold"
        >
          NSS-CUCEK
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
          Empowering students to make meaningful contributions to society through service, sustainability, and community engagement.
        </Text>
      </Box>

      {/* About NSS Section */}
      <Box mb={16}>
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.700"
        >
          About NSS
        </Heading>
        <Text fontSize="md" color="gray.700" textAlign="justify" lineHeight="1.8" px={[4, 0]}>
          The National Service Scheme (NSS) is a permanent youth programme under the Ministry of Youth Affairs and Sports, Government of India. Launched on 24th September 1969, its motto ‘Not Me But You’ reflects the essence of democratic living and the need for selfless service. NSS fosters empathy, community service, and social change, symbolized by its iconic logo inspired by the Konark Sun Temple's Rath Wheel.
        </Text>
      </Box>



      {/* Activities Section */}
      <Box mb={16}>
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.700"
        >
          Our Activities
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} {...activity} />
          ))}
        </SimpleGrid>
      </Box>



      {/* Coordinator Section */}
      <Box mb={16}>
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          color="blue.700"
        >
          Our Coordinators
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {coordinators.map((coordinator, idx) => (
            <CoordinatorCard key={idx} {...coordinator} />
          ))}
        </SimpleGrid>
      </Box>

    </Container>
  );
};

const ActivityCard = ({ title, description, imageUrl }) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      textAlign="center"
      bg="white"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
    >
      <Image
        src={imageUrl}
        alt={title}
        borderRadius="lg"
        mb={4}
        boxSize="200px"
        objectFit="cover"
        mx="auto"
      />
      <Heading as="h3" size="md" mb={2} color="blue.800" fontWeight="semibold">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};
const coordinators = [
  {
    name: 'Dr.Shiyas C R',
    designation: 'NSS Program Officer',
    imageUrl: 'coordinator1.jpeg',
  },
  {
    name: 'Jabir K V T',
    designation: 'NSS Program Officer',
    imageUrl: 'coordinator1.jpeg',
  },
  // Add more coordinators as needed
];

const activities = [
  {
    title: 'Community Service',
    description: 'Engaging in various community development programs across Kerala.',
    imageUrl: 'nss_commun.jpeg',
  },
  {
    title: 'Environmental Awareness',
    description: 'Organizing campaigns to promote environmental sustainability.',
    imageUrl: 'nss_env.jpeg',
  },
  {
    title: 'Health Camps',
    description: 'Conducting health check-up camps in rural areas.',
    imageUrl: 'nss_health.jpeg',
  },
  // Add more activities as needed
];

const CoordinatorCard = ({ name, designation, imageUrl }) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      textAlign="center"
      bg="white"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
    >
      <Image
        src={imageUrl}
        alt={name}
        borderRadius="full"
        mb={4}
        boxSize="150px"
        objectFit="cover"
        mx="auto"
      />
      <Heading as="h3" size="md" mb={2} color="blue.800" fontWeight="semibold">
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {designation}
      </Text>
    </Box>
  );
};


export default NSSCellPage;
