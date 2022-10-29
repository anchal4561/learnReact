import { Container,Button,Stack, Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon, StarIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
function SearchEx(){

    return(
        <Container mt={60}>
            <InputGroup size="lg" alignItems={"center"}>
                <Input borderRadius={15} boxShadow="md" p="6" rounded="md" bg="white"
                placeholder="Type job title or keyword"/>
                <SearchIcon ml={4} w={10} h={10}/>
            </InputGroup>
            <Stack
            spacing={4}
            direction="row"
            align="center"
            display="flex"
            justifyContent={"center"}
            mt={10}>
                <Button leftIcon={<StarIcon />} colorScheme="purple" variant="solid">
                    Remote
                </Button>
                <Button leftIcon={<LinkIcon />} colorScheme="purple" variant="solid">
                    Tech
                 </Button>
                <Button leftIcon={<PhoneIcon />} colorScheme="purple" variant="solid">
                    Marketing
                 </Button>
            </Stack>
        </Container>
    )
}
export default SearchEx;