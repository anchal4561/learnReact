import React from 'react'
import {
  Flex,
  Spacer,
  Box,
  Container,
} from "@chakra-ui/react";

function FlexEx() {
  return (
    <Container p={5} boxShadow="base" rounded="md" bg="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={"center"}
      >
        <Box
          p="4"
          w={{ base: "200px", md: "200px" }}
          h={{ base: "100px", md: "100px" }}
          bg="red.400"
          order={{ base: 1, md: 1 }}
        >
          Nav
        </Box>
        <Spacer />
        <Box
          p="4"
          w={{ base: "200px", md: "300px" }}
          h={{ base: "200px", md: "100px" }}
          bg="green.400"
          order={{ base: 3, md: 2 }}
        >
          Content
        </Box>
        <Spacer />
        <Box
          p="4"
          w={{ base: "200px", md: "200px" }}
          h={{ base: "100px", md: "100px" }}
          bg="yellow.400"
          order={{ base: 2, md: 3 }}
        >
          Widget
        </Box>
      </Flex>
    </Container>
  );
}

export default FlexEx