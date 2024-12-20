import { Box, Heading } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box
      bgImage="url('bg.png')"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box
        position="absolute"
        inset={0}
        bg="rgba(0, 0, 0, 0.5)" // Grey overlay
      />
      <Heading
        as="h1"
        fontSize={["3xl", "5xl", "6xl"]}
        fontWeight="bold"
        color="white"
        textShadow="0 2px 4px rgba(0, 0, 0, 0.8)"
        zIndex={1}
      >
        CUCEK
      </Heading>
    </Box>
  );
}
