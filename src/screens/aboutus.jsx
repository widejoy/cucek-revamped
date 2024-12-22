import React, { useRef } from "react";
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Image,
  Spacer,
  Container,
} from "@chakra-ui/react";

export default function AboutUsContents() {
  const sectionsContent = {
    principalMessage: `Welcome to the only rural campus of CUSAT, the Cochin University College of Engineering Kuttanad (CUCEK). You are opening the window to a great professional College with a strong tradition of excellence in academics, arts, sports, and societal commitments. Being a rural campus of the University, the institution has a wide spectrum of opportunities in all fields of engineering, management, and other disciplines. At CUCEK, you will receive the individual attention you need to build and develop your academic pursuit for a successful future. CUCEK has a committed, highly motivated, and academically strong team of faculty to provide you the help you need to reach your goals. The involvement of faculty members in active research in almost all fields of engineering adds flavor to even undergraduate-level teaching and learning. For the past many years, we have been educating young men and women to become engineers, managers, and leaders together with our traditions of hospitality, humility, service, stewardship, and giving of self to others.`,

    vision:
      "To be an institution of universal excellence by striving continuously in pursuit of exemplary value-based education, skill development, research, entrepreneurship, and technology-related services to society, especially rural areas.",

    mission: `
      1. To offer high-quality education in major engineering disciplines from the undergraduate to doctoral levels.

      2. To create a solution-based approach to the problems of rural society through technological innovations.

      3. To maintain partnerships with alumni, industry, and government through public service.

      4. To inculcate value-based education to students and other stakeholders.

      5. To promote sustainable development practices and innovation in every endeavor.
    `,
  };

  const principalRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  return (
    <Flex direction="column" minH="100vh" bg="gray.50">
      {/* Header Section */}
      <Box
        bgImage="url('bg.png')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="90vh"
        position="relative"
      >
        <Box
          bgGradient="linear(to-b, blackAlpha.800, transparent)"
          h="full"
          w="full"
          position="absolute"
        />
        <Flex justify="center" align="center" h="full" position="relative">
          <Heading
            color="white"
            fontSize={{ base: "4xl", md: "6xl" }}
            textAlign="center"
            textShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
          >
            About Us
          </Heading>
        </Flex>
      </Box>

      {/* Content Section */}
      <Container maxW="6xl" py={12} px={6}>
        <VStack spacing={12} align="start">
          {/* Principal's Message */}
          <Flex
            ref={principalRef}
            direction={{ base: "column", md: "row" }}
            align="center"
            bg="white"
            p={8}
            borderRadius="lg"
            shadow="md"
            gap={8}
          >
            <Image
              src="principal.png"
              alt="Prof. Dr. Asaletha R"
              borderRadius="full"
              boxSize="180px"
              objectFit="cover"
              shadow="lg"
            />
            <VStack spacing={4} align="start" flex="1">
              <Heading size="lg" color="teal.600">
                Prof. Dr. Asaletha R
              </Heading>
              <Text fontSize="md" color="gray.700" textAlign="justify">
                {sectionsContent.principalMessage}
              </Text>
            </VStack>
          </Flex>

          {/* Vision Section */}
          <Box
            ref={visionRef}
            bg="white"
            p={8}
            borderRadius="lg"
            shadow="md"
            w="full"
          >
            <Heading size="lg" color="teal.600" mb={4}>
              Vision
            </Heading>
            <Text fontSize="md" color="gray.700" textAlign="justify">
              {sectionsContent.vision}
            </Text>
          </Box>

          {/* Mission Section */}
          <Box
            ref={missionRef}
            bg="white"
            p={8}
            borderRadius="lg"
            shadow="md"
            w="full"
          >
            <Heading size="lg" color="teal.600" mb={4}>
              Mission
            </Heading>
            <VStack align="start" spacing={4}>
              {sectionsContent.mission
                .trim()
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <Text key={index} fontSize="md" color="gray.700">
                    {line.trim()}
                  </Text>
                ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
}
