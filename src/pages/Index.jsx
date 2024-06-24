import { Container, VStack, Heading, Text, Box, Flex, Icon } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Web Creators LLC",
    duration: "Jun 2018 - Dec 2019",
    description: "Designed and implemented user interfaces with HTML, CSS, and JavaScript.",
  },
  {
    title: "Intern",
    company: "Startup Hub",
    duration: "Jan 2018 - May 2018",
    description: "Assisted in the development of a mobile application using React Native.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Portfolio
        </Heading>
        {jobs.map((job, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex align="center" mb={2}>
              <Icon as={FaBriefcase} w={6} h={6} mr={2} />
              <Heading as="h2" size="md">
                {job.title}
              </Heading>
            </Flex>
            <Text fontWeight="bold">{job.company}</Text>
            <Text fontSize="sm" color="gray.500">
              {job.duration}
            </Text>
            <Text mt={2}>{job.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;