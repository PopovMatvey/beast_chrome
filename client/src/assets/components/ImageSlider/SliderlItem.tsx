import React from "react";

// Изображение слайдера (пункт)
export const CarouselItem = ({ item, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel-img" src={item.icon} alt="Изображение слайдера"/>
    </div>
  );
};