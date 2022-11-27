import { Box, Text } from "@chakra-ui/react";

function CustomizedTheme() {
  return (
    <Box sx={{ bg: "teal.100" }}>
      <Text color="green.800" textStyle="myheading">
        Quote
      </Text>
      <Text color="gray.700" textStyle="mytext">
        Carpe diem minimum credula postero
      </Text>
    </Box>
  );
}

export default CustomizedTheme;

// 1. write textStyles.js of your own with customized css properties

// 2. write code to over default theme using chakra UI's extendTheme function and pass theme in index.js file to Chakra Provider

// 3. try out whether the customized values are being applied or not using textStyle since we are just working on text theming as of now;
