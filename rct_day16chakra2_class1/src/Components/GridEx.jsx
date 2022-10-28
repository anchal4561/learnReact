import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";

function GridEx() {
  return (
    <Box>

      <Grid
        h="200px"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
      >
        <GridItem colSpan={5} bg="tomato">
          NAVBAR
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="yellow">
          SIDEBAR
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          POST 1
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          POST 2
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          POST 3
        </GridItem>
        <GridItem colSpan={5} bg="tomato">
          FOOTER
        </GridItem>
      </Grid>
      <br />
      <br />
      <Grid
        templateAreas={`"header header header"
                  "nav main sidebar"
                  "footer footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr 100px"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="orange.100" area={"sidebar"}>
          Sidebar
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  );
}

export default GridEx;
