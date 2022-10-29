import { BellIcon, ChatIcon, LinkIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Text,Container, Heading } from "@chakra-ui/react";

function Cards(){

    return (
        <>
        <Container
        border={"2px solid purple"}
        borderRadius={10}
        p={4}
        width="50%"
        alignSelf={"center"}
        _hover={{
            fontWeight:"semibold",
            boxShadow:"dark-lg",
            rounded:"md",
            bg:"white",

        }}
        mt="20px"   
        >
        <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center">
                <Text >Talewind</Text>
                <Box
                display={"grid"}
                gridTemplateColumns="repeat(5,1fr)"
                gap={1}
                justifyContent={"space-evenly"}
                alignItems="center">
                    <ChatIcon/>
                    <BellIcon/>
                    <LinkIcon/>
                    <MoonIcon/>
                    <SettingsIcon/>
                </Box>
                </Box>
                <Heading align={"left"}>Full-Stack Javascript Developer</Heading>
                <Box display={"flex"} justifyContent="space-between">
                    <Text>$50k - $65k</Text>
                    <Text>Full-Time</Text>
                </Box>
    
        </Container>
        </>
    )

}
export default Cards;