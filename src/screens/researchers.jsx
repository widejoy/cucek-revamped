import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  VStack,
  Separator,
  Button,
  Badge,
  Spinner,
} from "@chakra-ui/react";

const ResearchersPage = () => {
  const [researchers, setResearchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/research/");
        setResearchers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch researchers data.");
        setLoading(false);
      }
    };

    fetchResearchers();
  }, []);

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Spinner size="xl" color="teal.500" />
      </Box>
    );
  if (error)
    return (
      <Text color="red.500" textAlign="center" fontSize="lg" mt={8}>
        {error}
      </Text>
    );

  return (
    <Box p={8} bg="gray.100" minH="100vh">
      <Heading as="h1" size="2xl" color="teal.600" textAlign="center" mb={10}>
        Meet Our Researchers
      </Heading>

      <Stack spacing={8}>
        {researchers.map((researcher) => (
          <Box
            key={researcher.id}
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "2xl", transform: "translateY(-5px)" }}
          >
            <Stack direction={{ base: "column", md: "row" }} spacing={6} p={6}>
              {/* Image Section */}
              <Image
                src={researcher.image}
                alt={researcher.name}
                boxSize={{ base: "100%", md: "200px" }}
                objectFit="cover"
                borderRadius="lg"
              />

              {/* Content Section */}
              <Box flex="1">
                <Heading as="h2" size="lg" color="teal.700" mb={3}>
                  {researcher.name}
                </Heading>
                <Badge colorScheme="teal" mb={4} fontSize="sm">
                  {researcher.profession}
                </Badge>

                <Details researcher={researcher} />
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const Details = ({ researcher }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box mt={4}>
      <Button
        size="sm"
        colorScheme="teal"
        variant={isExpanded ? "solid" : "outline"}
        onClick={() => setIsExpanded(!isExpanded)}
        color={"black"}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>

      {isExpanded && (
        <Box mt={6} p={6} borderWidth="1px" borderRadius="lg" bg="gray.50">
          <VStack align="start" spacing={6}>
            <DetailSection
              title="Research Interests"
              content={researcher.research_interests}
            />
            <Separator />
            <DetailSection
              title="Research Scholars"
              content={researcher.research_scholars}
            />
            <Separator />
            <DetailSection title="Projects" content={researcher.projects} />
            <Separator />
            <DetailSection
              title="Publications"
              content={researcher.publications}
            />
          </VStack>
        </Box>
      )}
    </Box>
  );
};

const DetailSection = ({ title, content }) => (
  <Box>
    <Text fontWeight="bold" fontSize="md" color="teal.700" mb={1}>
      {title}:
    </Text>
    <Text fontSize="sm" color="gray.700" whiteSpace="pre-wrap">
      {content || "No information available."}
    </Text>
  </Box>
);

export default ResearchersPage;
