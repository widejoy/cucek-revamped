import {
  Box,
  Container,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

const Hostels = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
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
              window.open("https://cucek.cusat.ac.in/files/gents.pdf", "_blank")
            }
          >
            Gents Hostels
          </Button>

          <Button
            w="100%"
            colorScheme="pink"
            variant="solid"
            onClick={() =>
              window.open(
                "https://cucek.cusat.ac.in/files/ladies.pdf",
                "_blank"
              )
            }
          >
            Ladies Hostels
          </Button>

          <Button
            w="100%"
            colorScheme="yellow"
            variant="solid"
            onClick={() =>
              window.open(
                "https://cucek.cusat.ac.in/files/committee.pdf",
                "_blank"
              )
            }
          >
            Hostel Committee
          </Button>
        </VStack>

        <Text fontSize="sm" mt={6} color="gray.400">
          Click on a section to view the PDF.
        </Text>
      </Container>
    </Box>
  );
};

export default Hostels;
