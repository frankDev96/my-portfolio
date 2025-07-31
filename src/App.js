import React, { useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import SocialMenu from "./components/SocialMenu/SocialMenu";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectsList from "./pages/ProjectsList/ProjectsList";
import ContactMe from "./pages/ContactMe/ContactMe";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import CaseStudyDetails from "./pages/CaseStudyDetails/CaseStudyDetails";

function App() {
  const projectsRef = useRef(null);

  // Function to scroll to ProjectsList section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header />
      <SocialMenu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeScreen scrollToProjects={scrollToProjects} />
              <AboutMe />
              <div ref={projectsRef}>
                <ProjectsList />
              </div>
            </>
          }
        />
        <Route path="/case-study/:id" element={<CaseStudyDetails />} />
      </Routes>
      {/* <ContactMe />
      <ChatWidget /> */}
    </div>
  );
}

export default App;
