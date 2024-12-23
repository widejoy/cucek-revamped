import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Separator,
  List,
  SimpleGrid,
  Image,
  Link,
} from "@chakra-ui/react";

import { Check } from "lucide-react";

const ResearchPage = () => {
  return (
    <Box bg="gray.50" p={8}>
      <Stack spacing={8} maxW="1200px" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          Research at CUCEK
        </Heading>

        <Text fontSize="lg" color="gray.700">
          Academic enrichment of an institution is measured by its research
          output. CUCEK is a potential institution to initiate and nurture
          research in many areas of engineering and science. Located in a
          village with challenging soil strata for construction, impure water,
          and unplanned transportation systems, CUCEK is an ideal environment
          for impactful research. The region's abundance of waste materials such
          as rice husk, coconut shells, and weeds in water bodies presents
          unique challenges and opportunities for innovation.
        </Text>

        <Heading as="h2" size="lg" color="teal.400">
          Ongoing Research Areas
        </Heading>
        <List.Root spacing={4} fontSize="lg" color="gray.700">
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Improvement of construction practices in challenging soil
              conditions.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>Large-scale water purification techniques.</Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Stabilization of subsoil using coir geo-textiles.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Reuse of waste materials like rice husk and coconut shells for new
              building materials.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Mechanization in agriculture to increase productivity and reduce
              human labor.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Renewable and non-renewable energy-based power generation systems.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Development of flood control measures for rural and urban areas.
            </Text>
          </List.Item>
        </List.Root>

        <Separator />

        <Heading as="h2" size="lg" color="teal.400">
          Research Contributions
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Box bg="white" shadow="md" p={6} borderRadius="md">
            <Heading as="h3" size="md" color="teal.600">
              Faculty Projects
            </Heading>
            <Text mt={2} color="gray.600">
              Various faculty members at CUCEK are actively engaged in technical
              projects, exploring innovations in diverse fields of engineering
              and science.
            </Text>
          </Box>
          <Box bg="white" shadow="md" p={6} borderRadius="md">
            <Heading as="h3" size="md" color="teal.600">
              Research Students
            </Heading>
            <Text mt={2} color="gray.600">
              CUCEK supports PhD candidates through the School of Engineering
              under the Faculty of Engineering, Technology, and Management
              Studies.
            </Text>
          </Box>
          <Box bg="white" shadow="md" p={6} borderRadius="md">
            <Heading as="h3" size="md" color="teal.600">
              Research Publications
            </Heading>
            <Text mt={2} color="gray.600">
              Faculty and students have contributed to numerous national and
              international journals, showcasing their innovative research.
            </Text>
          </Box>
        </SimpleGrid>

        <Heading as="h2" size="lg" color="teal.400">
          Why CUCEK for Research?
        </Heading>
        <Text fontSize="lg" color="gray.700">
          CUCEK provides a dynamic research ecosystem that fosters
          collaboration, innovation, and real-world problem-solving. Its unique
          location and challenges create endless opportunities for impactful
          research, contributing to societal development.
        </Text>
        <List.Root spacing={4} fontSize="lg" color="gray.700">
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>Strong interdisciplinary faculty team.</Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              State-of-the-art research labs and infrastructure.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Collaboration with industry and government organizations.
            </Text>
          </List.Item>
          <List.Item display="flex" alignItems="center">
            <Check color="teal" size={20} />
            <Text ml={2}>
              Commitment to sustainable and innovative solutions.
            </Text>
          </List.Item>
        </List.Root>

        <Separator />

        <Heading as="h2" size="lg" color="teal.400">
          Meet the Researchers
        </Heading>

        <Box textAlign="center" mt={8}>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Explore the brilliant minds behind CUCEK's research contributions
            and learn about their innovative work.
          </Text>
          <Link href="/researchers" _hover={{ textDecoration: "none" }}>
            <Box
              as="button"
              px={6}
              py={3}
              bg="teal.500"
              color="white"
              borderRadius="md"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
            >
              Meet the Researchers
            </Box>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default ResearchPage;
