import React, { useEffect, useState } from "react";
import "./LogoSlider.css";

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logoImages = [
    { image: require("../../Images/p1.png") },
    { image: require("../../Images/p2.png") },
    { image: require("../../Images/p3.png") },
    { image: require("../../Images/p4.png") },
    { image: require("../../Images/p5.png") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
    }, 2000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, [logoImages.length]);

  return (
    <div className="logo-slider">
      <div className="logo-container">
        {logoImages.map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
