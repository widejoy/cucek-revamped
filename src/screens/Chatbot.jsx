import { Box, Input, Button, VStack, HStack, Text, Avatar, Container } from "@chakra-ui/react";
import { useState } from "react";
import ChatMessage from "../components/ui/ChatMessage";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const getChatBotResponse = async (input) => {
    const url = "http://127.0.0.1:8000/chat";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }), // Corrected input handling
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      alert("Error has occurred while connecting to AI model");
      return { output: "Sorry, I couldn't fetch a response." }; // Return a fallback response
    }
  };
  
  const handleSend = async () => { // Make handleSend async
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]); // Update messages with user input
  
      setInput(""); // Clear input field
  
      const chatResp = await getChatBotResponse(input); // Await chatbot response
  
      const botMessage = { text: chatResp.output, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]); // Update messages with bot response
    }
  };

  return (
    <Box w="100vw" h="100vh" bg="gray.900" color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Container maxW="container.md" bg="gray.800" p={4} borderRadius="lg" boxShadow="lg" h="80vh" display="flex" flexDirection="column">
        <VStack spacing={4} overflowY="auto" flex={1} p={2}>
          {
            messages.map(({ text, sender }) => {
              return (
                <ChatMessage text={text} sender={sender} />
              )
            })
          }

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
