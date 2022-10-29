import { Button, ButtonGroup, Divider, Spacer,Flex,Box,Heading } from "@chakra-ui/react";
import React from "react";

function Navbar(){

    return(
        <>
        <Flex minWidth="max-content" alignItems="center" gap="4">
            <Box p="2">
                <Heading color={"white"} p="1.5" size="md"  bgGradient="linear(to-l, #7928CA, #FF0080)">
                    4d
                </Heading>
            </Box>

        <Spacer/>
        <ButtonGroup gap="2">
            <Button bg={"white"}>Sign In</Button>
            <Button border={"1px solid blue"} color={"blue"}>Sign Up</Button>
            <Button color={"white"}  bgGradient="linear(to-l, #7928CA, #FF0080)">
                Post A Job
            </Button>
        </ButtonGroup>
        </Flex>
        <Divider/>
        </>
    )
}
export default Navbar