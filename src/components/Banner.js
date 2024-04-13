// Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import CSS for styling

const Banner = () => {
  // Sample image data with messages
  const images = [
    { url: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Image+1", message: "Message for Image 1" },
    { url: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Image+2", message: "Message for Image 2" },
    { url: "https://via.placeholder.com/150/5733FF/FFFFFF?text=Image+3", message: "Message for Image 3" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 1 second

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="banner">
      <h1>Welcome to My Portfolio</h1>
      <p>A showcase of my photography work</p>
      <div className="slideshow-container">
        <div className="slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`${index + 1}`}
              style={{ display: currentImageIndex === index ? 'block' : 'none' }}
            />
          ))}
          <div className="message-container">
            <p>{images[currentImageIndex].message}</p>
          </div>
        </div>
        <div className="pagination-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentImageIndex ? 'active' : ''}
              onClick={() => handleDotClick(index)}
              title={`Image ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
