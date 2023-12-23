import { useState } from "react";
import LeftArrow from "../assets/icons/LeftArrow.svg";
import RightArrow from "../assets/icons/RightArrow.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-96 rounded-md overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images?.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-screen relative">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              className="w-full h-full mx-auto rounded-md"
              style={{ objectFit: "none", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4"
        onClick={prevSlide}
      >
        <img src={LeftArrow} alt="left arrow" className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4"
        onClick={nextSlide}
      >
        <img src={RightArrow} alt="right arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
