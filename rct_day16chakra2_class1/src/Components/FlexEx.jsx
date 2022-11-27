import { Flex, Box, Spacer } from "@chakra-ui/react";

function FlexEx() {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="170px" h="10" bg="red.500" />
      <Spacer />
      <Box w="180px" h="10" bg="red.500" />
    </Flex>
  );
}

export default FlexEx;
