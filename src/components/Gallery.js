import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    '/images/iluvny.JPG', 
    '/images/oculus.JPG',
    '/images/dcmonument.JPG',
    '/images/whitehouse.JPG',
    '/images/nylibrary.JPG',
    '/images/girlstatue.JPG',
    '/images/empirestate.JPG', 
    '/images/19view.JPG',
    '/images/arch.JPG',
    '/images/lamp.JPG',
    '/images/river.JPG',
    '/images/boat.JPG',
    '/images/cat.JPG',
    '/images/dog.JPG', 
    '/images/fish.JPG',
    '/images/tanghulu.JPG'
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation(); // Prevent the modal from closing
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Prevent the modal from closing
    setSelectedImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`gallery-img-${index}`} 
          className="gallery-img" 
          onClick={() => handleImageClick(index)} 
          loading="lazy"
        />
      ))}

      {selectedImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <img 
            className="modal-content" 
            src={images[selectedImageIndex]} 
            alt="Full-size view" 
          />
          <span className="arrow left-arrow" onClick={showPreviousImage}>&#10094;</span>
          <span className="arrow right-arrow" onClick={showNextImage}>&#10095;</span>
        </div>
      )}
    </div>
  );
}

export default Gallery;
