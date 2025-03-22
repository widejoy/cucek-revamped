import { HStack, Text, Avatar } from "@chakra-ui/react";

const ChatMessage = ({ text, sender }) => {


    return (
        <HStack alignSelf={"flex-start"} width="100%">
            <Text bg={sender === "user" ? "blue.500" : "gray.700"} px={4} py={2} borderRadius="lg" maxW="70%">
                {text}
            </Text>
        </HStack>
    );
};

export default ChatMessage;