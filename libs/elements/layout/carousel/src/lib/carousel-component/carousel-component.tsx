'use client'

import { useState } from "react";
import { Products } from "@eccomerce/product-interface";
import Link from "next/link";

/* eslint-disable-next-line */
export interface CarouselComponentProps {images:Products[], itemsPerPage:number, phoneItemsPerPage:number}

export const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {

  const {
    images,
    itemsPerPage,
    phoneItemsPerPage
  } = props;

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? images.length - Math.abs(newIndex) : newIndex;
    });
  };

  const nextPhoneSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + phoneItemsPerPage) % images.length);
  };

  const prevPhoneSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - phoneItemsPerPage;
      return newIndex < 0 ? images.length - Math.abs(newIndex) : newIndex;
    });
  };

  return (
    <div className="carousel flex justify-center items-center">

      {/* phone */}
      <div className="md:hidden p-4 flex justify-center items-center">
        <div className="carousel-btn prev cursor-pointer" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="carousel-container flex flex-rol">
          {images
            .concat(images.slice(0, phoneItemsPerPage)) // Concatenate the beginning of the array to the end
            .slice(startIndex, startIndex + phoneItemsPerPage)
            .map((image, index) => (
              <div key={index} className="carousel-item bg-gray-50">
                <img src={image.imgSrc} alt={image.prodectName} className="w-full h-96"/>
                <Link href={`shop/product/${image.id}`}><p className="text-center cursor-pointer hover:text-pink-800">{image.prodectName}</p></Link>
                <p className="text-center">ksh {image.price}</p>
              </div>
          ))}
        </div>

        <div className="carousel-btn next cursor-pointer" onClick={nextPhoneSlide}>
          &#10095;
        </div>
      </div>

      {/* larger than phone */}
      <div className="hidden md:flex p-4 justify-center items-center">
      <div className="carousel-btn prev cursor-pointer" onClick={prevPhoneSlide}>
        &#10094;
      </div>
      <div className="carousel-container flex flex-row">
        {images
          .concat(images.slice(0, itemsPerPage)) // Concatenate the beginning of the array to the end
          .slice(startIndex, startIndex + itemsPerPage)
          .map((image, index) => (
            <div key={index} className="carousel-item bg-gray-50 rounded-2xl mx-4 w-full">
              <img src={image.imgSrc} alt={image.prodectName} className="w-80 h-60" />
              <p className="text-center">{image.prodectName}</p>
              <p className="text-center">${image.price}</p>
            </div>
        ))}
      </div>

      <div className="carousel-btn next cursor-pointer" onClick={nextSlide}>
        &#10095;
      </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
