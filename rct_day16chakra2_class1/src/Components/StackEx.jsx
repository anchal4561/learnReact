import { Stack, Box, Text, useBreakpointValue } from "@chakra-ui/react";

function StackEx() {
  const text = useBreakpointValue({
    base: "BASE",
    sm: "SMALL",
    md: "MEDIUM",
    lg: "LARGE",
    xl: {
      size: "XTRA LARGE"
    }
  });

  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }} spacing="24px">
        <Box w="200px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="200px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="200px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>

      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        This is responsive text
      </Text>

      <Text>{text.size ? text.size : text}</Text>
    </Box>
  );
}

export default StackEx;
