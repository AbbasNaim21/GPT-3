import React, { useState, useEffect } from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    // Function to load the images
    const loadImages = () => {
      const imagePromises = [
        loadImage(blog01),
        loadImage(blog02),
        loadImage(blog03),
        loadImage(blog04),
        loadImage(blog05),
      ];

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => {
          console.error("Error loading images:", error);
          setErrorLoading(true);
        });
    };

    loadImages();
  }, []);

  const loadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        resolve();
      };
      image.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {imagesLoaded ? (
            <Article
              imgUrl={blog01}
              date="Sep 26, 2021"
              text="GPT-3 and Open AI is the future. Let us explore how it is?"
            />
          ) : (
            <div className="gpt3__loading-message">Loading Article 1...</div>
          )}
        </div>
        <div className="gpt3__blog-container_groupB">
          {imagesLoaded ? (
            <>
              <Article
                imgUrl={blog02}
                date="Sep 26, 2021"
                text="GPT-3 and Open AI is the future. Let us explore how it is?"
              />
              <Article
                imgUrl={blog03}
                date="Sep 26, 2021"
                text="GPT-3 and Open AI is the future. Let us explore how it is?"
              />
              <Article
                imgUrl={blog04}
                date="Sep 26, 2021"
                text="GPT-3 and Open AI is the future. Let us explore how it is?"
              />
              <Article
                imgUrl={blog05}
                date="Sep 26, 2021"
                text="GPT-3 and Open AI is the future. Let us explore how it is?"
              />
            </>
          ) : (
            <div className="gpt3__loading-message">Loading Articles 2, 3, 4, 5...</div>
          )}
        </div>
      </div>
      {errorLoading && (
        <div className="gpt3__error-message">Error loading images. Please try again later.</div>
      )}
    </div>
  );
};

export default Blog;
