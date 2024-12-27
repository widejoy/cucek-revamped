import { Box } from "@chakra-ui/react";
import GlobalAppBar from "./components/ui/globalappbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/homepage";
import AboutUs from "./screens/aboutus";
import Cs from "./screens/cse";
import Ece from "./screens/ece";
import Ce from "./screens/ce";
import Mca from "./screens/mca";
import It from "./screens/it";
import ResearchPage from "./screens/research";
import ResearchersPage from "./screens/researchers";
import PlacementCellPage from "./screens/PlacementCellPage";
import NSSCellPage from "./screens/NSSCellPage";
import FacultyPage from "./screens/faculty";

function App() {
  return (
    <Box bg="white" minH="100vh">
      <GlobalAppBar />
      <Box as="main">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Cs />} path="/cse" />
          <Route element={<Ece />} path="/ece" />
          <Route element={<Ce />} path="/ce" />
          <Route element={<Mca />} path="/mca" />
          <Route element={<It />} path="/it" />
          <Route element={<ResearchPage />} path="/research" />
          <Route element={<ResearchersPage />} path="/researchers" />
          <Route element={<PlacementCellPage />} path="/placements" />
          <Route element={<NSSCellPage />} path="/nss-cell" />
          <Route element={<FacultyPage />} path="/faculty" />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
