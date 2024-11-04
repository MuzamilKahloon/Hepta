import React, { useState, useEffect } from 'react';
import '../slider/Slider.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const ImageSlider = () => {
    const images = [
      '/images/slider-3.jpg.webp', 
      '/images/slider-4.jpg.webp',
      '/images/slider-5.jpg.webp',
      '/images/slider-6.jpg.webp',
      '/images/img_1_long.jpg.webp'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Image changes every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="slider-container">
            <button className="arrow left-arrow" onClick={goToPrevious}>
            <FaArrowLeft />

            </button>
            <div className="slider">
                <img src={images[currentIndex]} alt="slide" className="slider-image" />
            </div>
            <button className="arrow right-arrow" onClick={goToNext}>
            <FaArrowRight />

            </button>
        </div>
    );
};

export default ImageSlider;
