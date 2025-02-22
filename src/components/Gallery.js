import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    '/images/zhujiajiao.jpg',
    '/images/zhujiajiao2.jpg',
    '/images/lamp.jpg',
    '/images/arch.jpg',
    '/images/boat.jpg',
    '/images/cat.jpg',
    '/images/dog.jpg',
    '/images/fish.jpg',
    '/images/chinagarden.jpg',
    '/images/chinagarden2.jpg',
    '/images/nightlongexp.jpg',
    '/images/tanghulu.jpg',
    '/images/floor19.jpg',
    '/images/oculus2.jpg',
    '/images/luvny.jpg', 
    '/images/empstate.jpg',
    '/images/bravegirl.jpg',
    '/images/car.jpg',
    '/images/fountain.jpg',
    '/images/peacock.jpg',
    '/images/luvny.jpg',
    '/images/dcmonument.jpg',
    '/images/whitehouse.jpg',
    '/images/niagara1.jpg',
    '/images/niagara2.jpg',
    '/images/niagara3.jpg',
    '/images/softballdab.jpg',
    '/images/softballbat.jpg',
    '/images/softballbat2.jpg',
    '/images/softballpitch.jpg',
    '/images/softballrun.jpg',
    '/images/softballhype.jpg',
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
