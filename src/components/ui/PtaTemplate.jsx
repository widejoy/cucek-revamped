import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { LiaSlashSolid } from "react-icons/lia";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "./breadcrumb";

const PtaTemplate = ({ image, branchName, sectionContent }) => {
  const aboutRef = useRef(null);
  const powerRef = useRef(null);
  const bylawsRef = useRef(null);

  const [activeTab, setActiveTab] = useState("about");

  const scrollToSection = (ref, tab) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tab);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [aboutRef, powerRef, bylawsRef];

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

  const handleBylawsClick = () => {
    window.open("https://cucek.cusat.ac.in/bodies/ptabylaws.pdf", "_blank");
  };

  return (
    <Flex direction="column" minH="100vh">
      {/* Hero Image */}
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
        </Flex>
      </Box>

      {/* Sections */}
      <Box flex="1" bg="gray.50">
        <Box mt="20px">
          <BreadcrumbRoot separator={<LiaSlashSolid />}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
            <BreadcrumbLink>Academics</BreadcrumbLink>
            <BreadcrumbCurrentLink color={"blackAlpha.600"}>
              {branchName}
            </BreadcrumbCurrentLink>
          </BreadcrumbRoot>
        </Box>

        <Section
          ref={aboutRef}
          id="about"
          title="About"
          content={sectionContent.about}
          bg="white"
        />
        <Section
          ref={powerRef}
          id="power"
          title="Powers and Responsibilities"
          content={sectionContent.power}
        />
        <Section
          ref={bylawsRef}
          id="bylaws"
          title="PTA Bylaws"
          content={
            <Button
              colorScheme="blue"
              variant="link"
              onClick={handleBylawsClick}
            >
              {sectionContent.bylaws}
            </Button>
          }
          bg="white"
        />
      </Box>

      {/* Bottom Nav */}
      <Box position="fixed" bottom="0" w="full" bg="white" shadow="lg" p="4">
        <HStack justify="center" spacing="8">
          {[
            { label: "About", ref: aboutRef, tab: "about" },
            { label: "Powers", ref: powerRef, tab: "power" },
            { label: "Bylaws", ref: bylawsRef, tab: "bylaws" },
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

export default PtaTemplate;
