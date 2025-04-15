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
import PlacementConnect from "./screens/PlacementConnect";
import NSSCellPage from "./screens/NSSCellPage";
import FacultyPage from "./screens/faculty";
import ChatBot from "./screens/Chatbot";
import Login from "./screens/login";
import TeacherClasses from "./components/ui/teacherClasses";
import ClassDetails from "./components/ui/classDetails";
import CompletePlacementProfile from "./screens/CompletePlacementProfile";
import Hostels from "./screens/Hostels";
import ArtsAndSports from "./screens/artsAndSports";
import Library from "./screens/library";
import Tour from "./screens/Tour";
import PlacementCompanies from "./screens/PlacementCompanies";
import AddCompany from "./screens/AddCompany";
import PlacementAdmin from "./screens/PlacementAdmin";

function App() {
  return (
    <Box bg="white" textc minH="100vh">
      <GlobalAppBar />
      <Box as="main">
        <Routes>
          {/* <Route element={<HomePage />} path="/" /> */}
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<Cs />} path="/cse" />
          <Route element={<Ece />} path="/ece" />
          <Route element={<Ce />} path="/ce" />
          <Route element={<Mca />} path="/mca" />
          <Route element={<It />} path="/it" />
          <Route element={<ResearchPage />} path="/research" />
          <Route element={<ResearchersPage />} path="/researchers" />
          <Route element={<PlacementCellPage />} path="/placements" />
          <Route element={<PlacementConnect />} path="/placement-connect" />
          <Route
            element={<CompletePlacementProfile />}
            path="/placement-profile"
          />
          <Route element={<NSSCellPage />} path="/nss-cell" />
          <Route element={<Hostels />} path="/hostels" />
          <Route element={<FacultyPage />} path="/faculty" />
          <Route element={<ChatBot />} path="chat" />
          <Route element={<Login />} path="/login" />
          <Route element={<TeacherClasses />} path="/classes" />
          <Route element={<ClassDetails />} path="/classes/:class_id" />
          <Route element={<ArtsAndSports />} path="/arts-and-sports" />
          <Route element={<Library />} path="/library" />
          <Route element={<Tour/>} path="/"/>
          <Route element={<PlacementCompanies/>} path="/placement-application"/>
          <Route element={<AddCompany />} path="/add-company"/>
          <Route element={<PlacementAdmin />} path="/companies"/>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
