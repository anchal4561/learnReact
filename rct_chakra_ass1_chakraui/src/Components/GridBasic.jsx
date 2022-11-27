import { Container,Grid,GridItem } from "@chakra-ui/react"
import React from "react"
function GridBasic(){

    return(
        <Container p={4} boxShadow="base" rounded="md" bg="white">
              <Grid
        h="200px"
        templateRows={{ base: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
        gap={4}
        justifyContent={{ base: "center", md: "center" }}
      >
        <GridItem colSpan={{ base: "1", md: "2" }} bg="violet" />
        <GridItem rowSpan={{ base: "1", md: "2" }} bg="tomato" />
        <GridItem colSpan={{ base: "1", md: "2" }} bg="blue" />
      </Grid>
        </Container>
    )
}
export default GridBasic