import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

const Hostels = () => {
  const navigate = useNavigate()
  return (
    <Box
      h="92.5vh"
      bg="gray.900"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        maxW="md"
        bg="gray.800"
        p={8}
        borderRadius="2xl"
        boxShadow="2xl"
        textAlign="center"
      >
        <Heading size="lg" mb={6} color="teal.300">
          Hostel Information
        </Heading>

        <VStack spacing={4}>
          <Button
            w="100%"
            colorScheme="teal"
            variant="solid"
            onClick={() =>
              navigate('/gents-hostels')
            }
          >
            Gents Hostels
          </Button>

          <Button
            w="100%"
            colorScheme="pink"
            variant="solid"
            onClick={() =>
             navigate('/ladies-hostels')
            }
          >
            Ladies Hostels
          </Button>

          <Button
            w="100%"
            colorScheme="yellow"
            variant="solid"
            onClick={() =>
              navigate('/hostel-committee')
            }
          >
            Hostel Committee
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hostels;
