import React, { useState } from "react";
import { Box, Button, Input, Text, Container } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster"

function CompletePlacementProfile() {
    const [cgpa, setCgpa] = useState("");
    const [percentage10, setPercentage10] = useState("");
    const [percentage12, setPercentage12] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/placement/profile/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`, 
                },
                body: JSON.stringify({
                    cgpa: parseFloat(cgpa),
                    percentage_10th: parseFloat(percentage10),
                    percentage_12th: parseFloat(percentage12),
                }),
            });

            if (response.ok) {
                toaster.create({
                    title: "success",
                    description: "Profile updated successfully!"
                });
            } else {
                const errorData = await response.json();
                toaster.create({
                    title: "Failed to update profile",
                    description: errorData.detail || "Something went wrong.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toaster.create({
                title: "Network error",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Container>
            <Text fontSize={30} color="black">
                Complete your placement profile
            </Text>

            <Box
                maxW="400px"
                mx="auto"
                mt="40px"
                p="20px"
                border="1px solid #ccc"
                borderRadius="8px"
                color="black"
            >
                <Text mb="4px" fontWeight="semibold" fontSize="sm">
                    CGPA
                </Text>
                <Input
                    type="number"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    mb="6px"
                    fontSize="sm"
                    placeholder="e.g. 8.5"
                />

                <Text mb="4px" fontWeight="semibold" fontSize="sm">
                    10th Percentage
                </Text>
                <Input
                    type="number"
                    value={percentage10}
                    onChange={(e) => setPercentage10(e.target.value)}
                    mb="6px"
                    fontSize="sm"
                    placeholder="e.g. 90.0"
                />

                <Text mb="4px" fontWeight="semibold" fontSize="sm">
                    12th Percentage
                </Text>
                <Input
                    type="number"
                    value={percentage12}
                    onChange={(e) => setPercentage12(e.target.value)}
                    mb="6px"
                    fontSize="sm"
                    placeholder="e.g. 89.0"
                />

                <br />
                <br />
                <Button variant="subtle" colorScheme="blue" onClick={handleSubmit}>
                    Complete Profile
                </Button>
            </Box>
            <Toaster />

        </Container>
    );
}

export default CompletePlacementProfile;
