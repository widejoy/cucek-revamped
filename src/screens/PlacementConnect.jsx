import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const companies = [
  { name: "Google", minGPA: 8.0 },
  { name: "Microsoft", minGPA: 7.5 },
  { name: "Amazon", minGPA: 7.0 },
  { name: "TCS", minGPA: 6.0 },
  { name: "Infosys", minGPA: 6.5 },
];

const PlacementConnect = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gpa, setGpa] = useState("");
  const [eligibleCompanies, setEligibleCompanies] = useState([]);

  const handleCheckEligibility = () => {
    const userGpa = parseFloat(gpa);
    if (!userGpa || userGpa < 0 || userGpa > 10) {
      alert("Please enter a valid GPA between 0 and 10.");
      return;
    }
    const filteredCompanies = companies.filter((c) => userGpa >= c.minGPA);
    setEligibleCompanies(filteredCompanies);
    onClose();
  };

  return (
    <Box textAlign="center" p={8}>
      <Heading as="h1" size="2xl" color="blue.700" mb={4}>
        Placement Connect
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        Enter your GPA to see eligible companies.
      </Text>
      <Button colorScheme="blue" size="lg" onClick={onOpen}>
        Enter GPA
      </Button>

      {/* GPA Input Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your GPA</ModalHeader>
          <ModalBody>
            <Input
              type="number"
              placeholder="Enter GPA"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              step="0.1"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCheckEligibility}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Eligible Companies Display */}
      {eligibleCompanies.length > 0 && (
        <Box mt={8}>
          <Heading as="h2" size="lg" color="blue.700" mb={4}>
            Eligible Companies
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {eligibleCompanies.map((company, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                boxShadow="lg"
                borderRadius="lg"
                textAlign="center"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              >
                <Text fontSize="xl" fontWeight="bold" color="blue.800">
                  {company.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Minimum GPA: {company.minGPA}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default PlacementConnect;
