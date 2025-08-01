import React, { useRef } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import SocialMenu from "./components/SocialMenu/SocialMenu";
import HomePage from "./pages/HomePage/HomePage";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectsList from "./pages/ProjectsList/ProjectsList";
import ContactMe from "./pages/ContactMe/ContactMe";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import CaseStudyDetails from "./pages/CaseStudyDetails/CaseStudyDetails";
import NotFound from "./pages/NotFound/NotFound";
import Skills from "./screens/Skills";
import Resume from "./screens/Resume";

function App() {
    const projectsRef = useRef<HTMLDivElement>(null);

    // Function to scroll to ProjectsList section
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
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
                            <HomePage scrollToProjects={scrollToProjects} />
                            <AboutMe />
                            <div ref={projectsRef}>
                                <ProjectsList />
                            </div>
                            <ContactMe />
                        </>
                    }
                />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/case-study/:id" element={<CaseStudyDetails />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatWidget />
        </div>
    );
}

export default App;
