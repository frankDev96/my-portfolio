import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import SocialMenu from "./components/SocialMenu/SocialMenu";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectsList from "./pages/ProjectsList/ProjectsList";
import ContactMe from "./pages/ContactMe/ContactMe";
import ChatWidget from "./components/ChatWidget/ChatWidget";

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
      <HomeScreen scrollToProjects={scrollToProjects} />
      <AboutMe />
      <div ref={projectsRef}>
        <ProjectsList ref={projectsRef} />
      </div>
      {/* <ContactMe />
      <ChatWidget /> */}
    </div>
  );
}

export default App;
