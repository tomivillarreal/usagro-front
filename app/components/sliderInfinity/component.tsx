import Image from "next/image";
import "./styles.css";
import marca1 from "/public/images/marcas/marca1.png";
import marca2 from "/public/images/marcas/marca2.png";
import marca3 from "/public/images/marcas/marca3.png";
import marca4 from "/public/images/marcas/marca4.png";
import marca5 from "/public/images/marcas/marca5.png";
import marca6 from "/public/images/marcas/marca6.png";
import marca7 from "/public/images/marcas/marca7.png";
import marca8 from "/public/images/marcas/marca8.png";
export default function SliderInfinity() {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image
              src={marca1}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca2}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca3}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca4}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca5}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca6}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca7}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca8}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca1}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca2}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca3}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca4}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src={marca5}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
