import { useState } from "react";
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email: email,
        password: password,
      });
      console.log("Login successful", response.data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
    } catch (err) {
      // Extract a readable error message from the error object
      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message ||
        "An error occurred during login";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.900, gray.800)"
      p={4}
    >
      <Box
        bg="gray.700"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        w={{ base: "90%", sm: "500px" }}
        textAlign="center"
      >
        <Heading mb={4} color="white" fontWeight="bold">
          Sign In
        </Heading>
        <Text color="gray.300" fontSize="sm" mb={6}>
          Enter your credentials to access your account
        </Text>
        {errorMessage && (
          <Text color="red.400" mb={4}>
            {errorMessage}
          </Text>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <FormControl isRequired>
              <FormLabel color="white" fontSize="lg">
                Email
              </FormLabel>
              <InputGroup>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="white"
                  borderColor="gray.500"
                  _focus={{ borderColor: "blue.400", bg: "white" }}
                  placeholder="you@example.com"
                  color="black"
                  py={8}
                  px={6}
                  borderRadius="10px"
                  fontSize="lg"
                  width="500px"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="white" fontSize="lg">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  bg="white"
                  borderColor="gray.500"
                  _focus={{ borderColor: "blue.400", bg: "white" }}
                  placeholder="••••••••"
                  color="black"
                  py={8}
                  px={6}
                  borderRadius="10px"
                  fontSize="lg"
                  width="500px"
                />
                <InputRightElement height="full" pr={4}>
                  <IconButton
                    variant="ghost"
                    colorScheme="blackAlpha"
                    icon={showPassword ? <EyeOff /> : <Eye />}
                    onClick={() => setShowPassword(!showPassword)}
                    fontSize="xl"
                    zIndex={"20"}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              size="lg"
              isLoading={isLoading}
              borderRadius="full"
              mt={2}
              py={4}
            >
              Sign In
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
