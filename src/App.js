import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import SocialMenu from "./components/SocialMenu/SocialMenu";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import ContactPage from "./components/ContactPage/ContactPage";

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
