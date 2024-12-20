import { Box } from "@chakra-ui/react";
import GlobalAppBar from "./components/ui/globalappbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/homepage";

function App() {
  return (
    <Box bg="white" minH="100vh">
      <GlobalAppBar />
      <Box as="main">
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
