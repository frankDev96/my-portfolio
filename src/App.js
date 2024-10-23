import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}
      {/* <nav> */}
      <Header />
      {/* </nav> */}
      {/* </div> */}
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-image">
                <img
                  src={require("./assets/images/user.png")}
                  alt="Hero Image"
                />
              </div>
              <div className="hero-text">
                <h1>Hello I'm Franklin</h1>
                <h2>Front End Developer</h2>
                <p>
                  Rutrum odio est platea viverra sed lobortis elit. Eget
                  fringilla tempus suspendisse amet vitae amet lorem erat
                  fermentum. Amet eu quis mauris est diam eget nulla purus
                  ipsum. Lacinia accumsan enim amet.
                </p>
                <Stats />
                <a href="/about" className="button">
                  About Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            {/* <Services /> */}
            <h2>Services</h2>
            <div className="services-grid">
              <div className="service">
                <img src="/ux-ui-design.svg" alt="UX/UI Design" />
                <h3>UX/UI Design</h3>
                <p>
                  A morbi felis libero sit sed. Orci duis nascetur orci mi
                  cursus. Ante condimentum in elementum egestas nullam
                  pellentesque olutpat.
                </p>
              </div>
              <div className="service">
                <img src="/product-design.svg " alt="Product Design" />
                <h3>Product Design</h3>
                <p>
                  A morbi felis libero sit sed. Orci duis nascetur orci mi
                  cursus. Ante condimentum in elementum egestas nullam
                  pellentesque olutpat.
                </p>
              </div>
              <div className="service">
                <img src="/front-end-dev.svg" alt="Front-end Development" />
                <h3>Front-end Development</h3>
                <p>
                  A morbi felis libero sit sed. Orci duis nascetur orci mi
                  cursus. Ante condimentum in elementum egestas nullam
                  pellentesque olutpat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
