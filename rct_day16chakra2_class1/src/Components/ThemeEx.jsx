import { Box, Text } from "@chakra-ui/react";

function ThemeEx() {
  return (
    <Box m={2}>
      <Text color="green.800" fontSize="8xl" letterSpacing="widest">
        Quote
      </Text>
      <Text color="gray.700" fontSize="4xl">
        Carpe diem minimum credula postero
      </Text>
    </Box>
  );
}

export default ThemeEx;
