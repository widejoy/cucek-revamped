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
} from "@chakra-ui/react";

const ResearchersPage = () => {
  const [researchers, setResearchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/research/");
        setResearchers(response.data); // Assuming the API returns an array
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch researchers data.");
        setLoading(false);
      }
    };

    fetchResearchers();
  }, []);

  if (loading) return <Text color="black">Loading...</Text>;
  if (error) return <Text color="black">{error}</Text>;

  return (
    <Box p={6}>
      <Heading as="h1" size="xl" color="black" textAlign="center" mb={8}>
        Meet Our Researchers
      </Heading>

      <Stack spacing={6}>
        {researchers.map((researcher) => (
          <Box
            key={researcher.id}
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
          >
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              {/* Image Section */}
              <Image
                src={researcher.image}
                alt={researcher.name}
                boxSize="200px"
                objectFit="cover"
                borderRadius="md"
              />

              {/* Content Section */}
              <Box flex="1" p={4}>
                <Heading as="h2" size="md" color="black" mb={2}>
                  {researcher.name}
                </Heading>
                <Text fontSize="sm" color="black" mb={3}>
                  {researcher.profession}
                </Text>

                {/* Expandable Details */}
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
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>

      {isExpanded && (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontWeight="bold" color="black">
                Research Interests:
              </Text>
              <Text color="black" whiteSpace="pre-wrap">
                {researcher.research_interests}
              </Text>
            </Box>

            <Separator />

            <Box>
              <Text fontWeight="bold" color="black">
                Research Scholars:
              </Text>
              <Text color="black" whiteSpace="pre-wrap">
                {researcher.research_scholars}
              </Text>
            </Box>

            <Separator />

            <Box>
              <Text fontWeight="bold" color="black">
                Projects:
              </Text>
              <Text color="black" whiteSpace="pre-wrap">
                {researcher.projects}
              </Text>
            </Box>

            <Separator />

            <Box>
              <Text fontWeight="bold" color="black">
                Publications:
              </Text>
              <Text color="black" whiteSpace="pre-wrap">
                {researcher.publications}
              </Text>
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ResearchersPage;
