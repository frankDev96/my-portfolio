import React, { useState } from "react";
import "./Services.css"; // Import the CSS file

interface ServiceProps { }

interface Service {
  title: string;
  icon: string;
  description: string;
}

const Services: React.FC<ServiceProps> = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: Service[] = [
    {
      title: "UX/UI Design",
      icon: "💻",
      description:
        "A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque olutpat.",
    },
    {
      title: "Product Design",
      icon: "📦",
      description:
        "A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque olutpat.",
    },
    {
      title: "Branding",
      icon: "🏠",
      description:
        "A morbi felis libero sit sed. Orci duis nascetur orci mi cursus. Ante condimentum in elementum egestas nullam pellentesque olutpat.",
    },
  ];

  const handlePrev = (): void => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = (): void => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <div className="services-slider">
        <button className="prev-btn" onClick={handlePrev}>
          {"<"}
        </button>
        <div className="slide-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeSlide ? "active" : ""}`}
            >
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <span className="icon">{slide.icon}</span>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Services;
