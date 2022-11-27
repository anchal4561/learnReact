import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex py="1rem" bg="pink.300" my={0.5}>
      <Heading>LOGO</Heading>

      <Spacer />
      <Button mx={2}>LOGIN</Button>
      <Button mx={2}>SIGNUP</Button>
    </Flex>
  );
}

export default Navbar;
