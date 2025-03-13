import { Box, Input, Button, VStack, HStack, Text, Avatar, Container } from "@chakra-ui/react";
import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm a bot! How can I help?", sender: "bot" }]);
      }, 500);
    }
  };

  return (
    <Box w="100vw" h="100vh" bg="gray.900" color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Container maxW="container.md" bg="gray.800" p={4} borderRadius="lg" boxShadow="lg" h="80vh" display="flex" flexDirection="column">
        <VStack spacing={4} overflowY="auto" flex={1} p={2}>
          {messages.map((msg, index) => (
            <HStack key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}>
              {msg.sender === "bot" && <Avatar name="Bot" bg="blue.500" size="sm" />}
              <Text bg={msg.sender === "user" ? "blue.500" : "gray.700"} px={4} py={2} borderRadius="lg" maxW="70%">
                {msg.text}
              </Text>
              {msg.sender === "user" && <Avatar name="You" bg="green.500" size="sm" />}
            </HStack>
          ))}
        </VStack>
        <HStack p={2}>
          <Input
            flex={1}
            bg="gray.700"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            color="white"
          />
          <Button colorScheme="blue" onClick={handleSend}>Send</Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default ChatBot;
