import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LiaSlashSolid } from "react-icons/lia";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "./breadcrumb";

const AcademicsTemplate = ({
  image,
  branchName,
  subtitle,
  sectionContent,
  hodPhoto,
  hodName,
  hodProfilePath,
}) => {
  const teamRef = useRef(null);
  const visionRef = useRef(null);
  const achievementsRef = useRef(null);
  const associationRef = useRef(null);
  const hodRef = useRef(null);

  const [activeTab, setActiveTab] = useState("team");
  const navigate = useNavigate();

  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tab);
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    const sections = [
      teamRef,
      visionRef,
      achievementsRef,
      associationRef,
      hodRef,
    ];

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  return (
    <Flex direction="column" minH="100vh">
      {/* Background Image Section */}
      <Box
        bgImage={`url(${image})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="100vh"
        position="relative"
      >
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, blackAlpha.900, transparent, blackAlpha.900)"
          opacity="0.8"
        ></Box>
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          color="white"
          position="relative"
          mt="24"
        >
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            {branchName}
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            mt="4"
            maxW="2xl"
            color="gray.300"
          >
            {subtitle}
          </Text>
        </Flex>
      </Box>

      {/* Sections Below */}
      <Box flex="1" bg="gray.50">
        <Box marginTop={"20px"}>
          <BreadcrumbRoot separator={<LiaSlashSolid />}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            <BreadcrumbLink>Academics</BreadcrumbLink>
            <BreadcrumbCurrentLink color={"blackAlpha.600"}>
              {branchName}
            </BreadcrumbCurrentLink>
          </BreadcrumbRoot>
        </Box>
        <Section
          ref={teamRef}
          id="team"
          title="Team"
          content={sectionContent.team}
          bg="white"
        />
        <Section
          ref={visionRef}
          id="vision"
          title="Vision"
          content={sectionContent.vision}
        />
        <Section
          ref={achievementsRef}
          id="achievements"
          title="Achievements"
          content={sectionContent.achievements}
          bg="white"
        />
        <Section
          ref={associationRef}
          id="association"
          title="Association"
          content={sectionContent.association}
        />

        {/* HOD Section */}
        <Box
          ref={hodRef}
          id="hod"
          minH="100vh"
          p="10"
          bg="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing="6" textAlign="center">
            <Image
              src={hodPhoto}
              alt={`${hodName} Photo`}
              boxSize="160px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text fontSize="4xl" fontWeight="bold" color="gray.800">
              {hodName}
            </Text>
            <Text fontSize="lg" color="gray.600">
              {sectionContent.hod}
            </Text>
            {/* <Button
              onClick={() => navigate(hodProfilePath)}
              colorScheme="blue"
              size="lg"
              variant="solid"
            >
              View Profile
            </Button> */}
          </VStack>
        </Box>
      </Box>

      {/* Bottom Navigation Bar */}
      <Box position="fixed" bottom="0" w="full" bg="white" shadow="lg" p="4">
        <HStack justify="center" spacing="8">
          {[
            { label: "Team", ref: teamRef, tab: "team" },
            { label: "Vision", ref: visionRef, tab: "vision" },
            {
              label: "Achievements",
              ref: achievementsRef,
              tab: "achievements",
            },
            { label: "Association", ref: associationRef, tab: "association" },
            { label: "HOD", ref: hodRef, tab: "hod" },
          ].map(({ label, ref, tab }) => (
            <Button
              key={tab}
              variant="ghost"
              fontSize="lg"
              fontWeight="semibold"
              borderBottomWidth="2px"
              borderColor={activeTab === tab ? "blue.500" : "transparent"}
              color={activeTab === tab ? "blue.500" : "gray.600"}
              onClick={() => scrollToSection(ref, tab)}
            >
              {label}
            </Button>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};

const Section = React.forwardRef(
  ({ id, title, content, bg = "gray.50" }, ref) => (
    <Box
      ref={ref}
      id={id}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="10"
      bg={bg}
    >
      <VStack spacing="6" textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="gray.800">
          {title}
        </Text>
        <Text fontSize="lg" color="gray.600">
          {content}
        </Text>
      </VStack>
    </Box>
  )
);

export default AcademicsTemplate;
