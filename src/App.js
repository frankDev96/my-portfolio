import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import SocialMenu from "./components/SocialMenu/SocialMenu";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectsList from "./pages/ProjectsList/ProjectsList";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <SocialMenu />
      <HomeScreen />
      <AboutMe />
      <ProjectsList />
      <ContactPage />
    </div>
  );
}

export default App;
