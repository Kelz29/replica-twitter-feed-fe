import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { Logo } from "./Logo";
import SidebarWithHeader from "./components/Sidebar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithHeader>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Logo h="40vmin" pointerEvents="none" />
        </Grid>
      </Box>
    </SidebarWithHeader>
  </ChakraProvider>
);
