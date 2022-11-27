import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from 'react'

function GridMain() {
  return (
    <Container p={5} boxShadow="base" rounded="md" bg="white">
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2,1fr)",
          md: "repeat(6,1fr)",
        }}
        templateRows={{
          base: "40px 40px 120px 60px 60px",
          sm: "80px 120px 60px 60px",
          md: "80px 120px 120px",
        }}
        gap={6}
      >
        <GridItem rowSpan={1} colSpan={{ base: 1, sm: 1, md: 3 }} bg="yellow" />
        <GridItem rowSpan={1} colSpan={{ base: 1, sm: 1, md: 3 }} bg="yellow" />
        <GridItem
          rowSpan={1}
          colSpan={{ base: 1, sm: 2, md: 6 }}
          bg="red"
        />
        <GridItem colSpan={{ base: 1, sm: 2, md: 2 }} bg="blue" />
        <GridItem colSpan={{ base: 1, sm: 2, md: 2 }} bg="blue" />
        <GridItem
          colSpan={2}
          display={{ md: "block", sm: "none", base: "none" }}
          bg="blue"
        />
      </Grid>
    </Container>
  );
}

export default GridMain