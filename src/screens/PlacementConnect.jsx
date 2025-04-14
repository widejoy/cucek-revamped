import React, { useEffect, useState } from 'react'


import {
  Box,
  Badge,
  Text
} from "@chakra-ui/react";


function PlacementConnect() {
  
  const [profile,setProfile] = useState({})

  const fetchPlacementProfile = async () => {
    const url = 'http://127.0.0.1:8000/api/placement/profile/';
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        'content-type': 'application/json'
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return [data, response.status]
    } catch (error) {
      console.error(error);
      return [null, "401"]
    }
  }

  useEffect(
    () => {
      fetchPlacementProfile()
        .then(([data, status]) => {
          if(status == 200) {
            setProfile(data)
          }
          else if(status == 404) {
            alert("Create profile")
          }
        })
    }, []



  )


  return (
    <Box
      p="6"
      borderRadius="md"
      maxW="400px"
      mx="auto"
      mt="8"
      bg="#f0f4f8"
      color="#2a4365"
      boxShadow="md"
    >
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        My Profile
      </Text>

      {profile.is_placement_coordinator && (
        <Badge
          colorScheme="purple"
          mb="4"
          fontSize="0.9em"
          px="2"
          py="1"
          borderRadius="md"
        >
          Placement Coordinator
        </Badge>
      )}

      <Text mb="2">
        <strong>CGPA:</strong> {profile.cgpa}
      </Text>
      <Text mb="2">
        <strong>10th Percentage:</strong> {profile.percentage_10th}%
      </Text>
      <Text mb="2">
        <strong>12th Percentage:</strong> {profile.percentage_12th}%
      </Text>
    </Box>
  );
};

export default PlacementConnect