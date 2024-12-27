import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Grid,
  GridItem,
  IconButton,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { LiaSlashSolid } from "react-icons/lia";
import { Search } from "lucide-react";
import {
  BreadcrumbRoot,
  BreadcrumbLink,
  BreadcrumbCurrentLink,
} from "../components/ui/breadcrumb";
import { Avatar } from "../components/ui/avatar";
import { Collapsible } from "@chakra-ui/react";
import { Button } from "../components/ui/button";

const FacultyPage = () => {
  const branches = ["CSE", "CE", "EEE", "IT", "ME", "MCA"];
  const [facultyList, setFacultyList] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/teachers/");
        const data = await response.json();
        setFacultyList(data);
        setFilteredFaculty(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  const handleBranchFilter = (branch) => {
    setSelectedBranch(branch);
    const filtered =
      branch === "All"
        ? facultyList
        : facultyList.filter((faculty) => faculty.branch === branch);
    setFilteredFaculty(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const searched = facultyList.filter(
      (faculty) =>
        faculty.name.toLowerCase().includes(query.toLowerCase()) ||
        faculty.branch.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFaculty(searched);
  };

  return (
    <Box p={5} bgGradient="linear(to-r, teal.50, white)" color="black">
      {/* Breadcrumb */}
      <BreadcrumbRoot separator={<LiaSlashSolid />}>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbLink>People</BreadcrumbLink>
        <BreadcrumbCurrentLink color={"blackAlpha.600"}>
          Faculty
        </BreadcrumbCurrentLink>
      </BreadcrumbRoot>

      {/* Page Header */}
      <Box textAlign="center" py={8}>
        <Heading size="2xl" color="teal.600" mb={4}>
          Meet Our Faculty
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Discover the educators who are shaping the future at CUCEK.
        </Text>
      </Box>

      <Grid templateColumns="1fr 3fr" gap={6} alignItems="start">
        <GridItem>
          <VStack
            align="stretch"
            spacing={4}
            w="100%"
            bg="teal.50"
            p={5}
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading size="md" color="teal.500">
              Branches
            </Heading>
            {["All", ...branches].map((branch) => (
              <Button
                key={branch}
                variant="ghost"
                justifyContent="flex-start"
                color={selectedBranch === branch ? "teal.900" : "teal.700"}
                _hover={{ bg: "teal.100" }}
                onClick={() => handleBranchFilter(branch)}
              >
                {branch}
              </Button>
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="stretch" spacing={6}>
            <Box bg="white" p={5} borderRadius="lg" boxShadow="sm">
              <Heading size="lg" mb={3} color="teal.500">
                Search Faculty
              </Heading>
              <HStack>
                <Input
                  placeholder="Search faculty by name or department"
                  size="lg"
                  bg="gray.50"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <IconButton aria-label="Search" size="lg" colorScheme="teal">
                  <Search />
                </IconButton>
              </HStack>
            </Box>

            {/* Faculty List */}
            {/* Faculty List */}
            <Box>
              <Heading size="lg" mb={4} color="teal.500">
                Faculty
              </Heading>
              {loading ? (
                <Spinner size="xl" color="teal.500" />
              ) : filteredFaculty.length === 0 ? (
                <Text color="gray.500">No results found</Text>
              ) : (
                <Grid templateColumns="1fr" gap={6}>
                  {filteredFaculty.map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </Grid>
              )}
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

const FacultyCard = ({ faculty }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GridItem
      bg="white"
      p={5}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
    >
      <Avatar size="2xl" name={faculty.name} src={faculty.image} mb={3} />
      <Heading size="md" color="teal.600">
        {faculty.name}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {faculty.profession}
      </Text>

      <Collapsible.Root>
        <Collapsible.Content>
          <Text mt={2} fontSize="sm" color="gray.700">
            <strong>Branch:</strong> {faculty.branch}
          </Text>
          <Text mt={2} fontSize="sm" color="gray.700">
            <strong>Qualifications:</strong> {faculty.qualifications}
          </Text>
          <Text mt={2} fontSize="sm" color="gray.700">
            <strong>Experience:</strong> {faculty.experience} years
          </Text>
          <Text mt={2} fontSize="sm" color="gray.700">
            <strong>Projects:</strong> {faculty.projects}
          </Text>
          <Text mt={4} fontSize="sm" color="gray.700">
            <strong>About:</strong>
          </Text>
          {faculty.about.split("\n").map((line, index) => (
            <Text key={index} mt={1} fontSize="sm" color="gray.700">
              {line.trim()}
            </Text>
          ))}
          <Button
            mt={4}
            as="a"
            variant="outline"
            color="black"
            href={`https://iqac.cusat.ac.in/Web/profile_view/${faculty.path}`}
            target="_blank"
          >
            View Full Profile
          </Button>
        </Collapsible.Content>
        <Collapsible.Trigger asChild>
          <Button
            mt={4}
            colorScheme="teal"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Root>
    </GridItem>
  );
};

export default FacultyPage;
