import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function Carrusel({ images }: { images: any }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.map((image: any, index: any) => {
        return (
          <div  key={index}>
            <Image
              src={image}
              layout="responsive"
              width={1000}
              height={1000}
              alt={`Imagen ${index}`}
              className="object-cover"
            ></Image>
          </div>
        );
      })}
    </Slider>
  );
}
