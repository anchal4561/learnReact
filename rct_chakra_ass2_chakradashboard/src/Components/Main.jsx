import React from "react";
import { Stack, Heading, Grid } from "@chakra-ui/react";
import Cards from "./Cards";
const Main = () => {
  return (
    <Stack bg={"blue.50"} marginTop={5} p={2}>
      <Heading width="50%" margin={"auto"} align="left" color={"purple"}>
        Recent Jobs
      </Heading>
      <Grid>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Stack>
  );
};

export default Main;