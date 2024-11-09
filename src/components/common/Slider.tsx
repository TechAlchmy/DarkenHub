import React, { useState, ReactNode, useRef } from 'react';

import './style.css';
import { ClassNames } from '@emotion/react';
import { useEffect } from 'react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemsToShow?: number;
}

const Slider: React.FC<CarouselProps> = ({ children, className, itemsToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 + 1 < totalItems ? prevIndex + 1 : prevIndex
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 500); // Call goToNext every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalItems]); // Dependency array to re-run effect if totalItems changes

  return (
    <div className={`carousel md:gap-5 sm:gap-[1vw] gap-0 ${className}`}>
      <div className='overflow-hidden w-full h-full relative'>
        {React.Children.map(children, (child, index) => (
          <div className={`${index == currentIndex ? 'active-item' : index == currentIndex - 1 ? 'prev-item' : index == currentIndex + 1 ? 'next-item' : 'none-item'}`} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;