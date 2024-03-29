import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function CarruselItem({ images }: { images: any }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="lg:block hidden w-full h-full">
        <Slider {...settings}>
          {images.map((image: any, index: any) => {
            return (
              <div key={index} className="h-36 w-36 shadow-md aspect-square">
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
      </div>
      <div className="lg:hidden relative ">
        <Slider {...settings}>
          {images.map((image: any, index: any) => {
            return (
              <div key={index} className="max-h-36 max-w-36 shadow-md aspect-square">
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
      </div>
    </div>
  );
}
