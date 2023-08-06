import React, { useState, useEffect } from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Function to load the possibilityImage
    const loadImage = () => {
      const image = new Image();
      image.src = possibilityImage;
      image.onload = () => {
        setImageLoaded(true);
      };
    };

    loadImage();
  }, []);

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        {imageLoaded ? (
          <img src={possibilityImage} alt="possibility" />
        ) : (
          <div>Loading possibility image...</div>
        )}
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};


export default Possibility;
