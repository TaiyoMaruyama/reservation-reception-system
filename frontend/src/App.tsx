import { Box } from "@kuma-ui/core";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box h="calc(100vh - 50px)" pt={50}>
      <Outlet />
    </Box>
  );
}

export default App;
