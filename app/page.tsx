"use client";

import Image from "next/image";
import portada from "../public/images/portada.jpg";
import tractor1 from "../public/images/tractor.png";
import tractor2 from "../public/images/tractor2.webp";
import tractor3 from "../public/images/tractor3.png";
import tractor4 from "../public/images/tractor4.webp";
import tractor5 from "../public/images/tractor5.png";
import tractor6 from "../public/images/tractor6.jpg";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="w-full h-full">
      {/* Call to action */}
      <section className="w-full h-full relative">
        <div className="relative w-full h-screen z-0 object-cover">
          <Image
            src={portada}
            fill
            alt="portada"
            className="object-cover"
          ></Image>
        </div>
        <div className="absolute top-0 w-full h-full z-10">
          <div className="flex h-full w-full justify-center items-center">
            <div className="w-96 justify-center items-center text-center flex flex-col gap-3">
              <h1 className="text-white BOLD text-5xl"> USAGRO </h1>
              <p className="text-white text-3xl">
                ¡Optimiza con nuestras máquinas agrícolas usadas! ¡Haz crecer tu
                negocio ya!{" "}
              </p>
              <button
                className="bg-[#6c6422] h-max w-max p-4 text-white"
                onClick={() => router.push("/catalogo")}
              >
                Ver Catalogo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* PRIMER CATALOGO */}
      <section className="flex flex-col gap-10 h-full w-full">
        <article className="flex lg:flex-row lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="sm:w-max w-full h-max">
            <Image
              src={tractor1}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
        <article className="flex lg:flex-row-reverse lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="sm:w-[1000px] w-full h-max">
            <Image
              src={tractor2}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
        <article className="flex lg:flex-row lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="sm:w-max w-full h-max">
            <Image
              src={tractor3}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
        <article className="flex lg:flex-row-reverse lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="sm:w-max w-full h-max">
            <Image
              src={tractor4}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
        <article className="flex lg:flex-row lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="sm:w-max w-full h-max">
            <Image
              src={tractor5}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
        <article className="flex lg:flex-row-reverse lg:h-[600px] flex-col shadow-xl h-full w-full">
          {/* Imagen */}
          <div className="lg:w-max w-full h-max">
            <Image
              src={tractor6}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 bg-gray-100 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-7xl">Tractor Jonh Deere</h1>
              <h2 className="text-3xl">$70.000 USD</h2>
              <p>7200J</p>
              <ul>
                <li>Tractor de 200 hp</li>
                <li>
                  Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de
                  200 hp con inyección electrónica de alta presión Common Rail.
                </li>
                <li>
                  Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
                  retroceso.
                </li>
                <li>Chasis de acero fundido de diseño integral</li>
                <li>
                  Equipado de fábrica con JDLink™ y piloto automático Autotrac™
                  .
                </li>
              </ul>
            </div>
            <button
              className="bg-[#fcdc5c] h-max w-max p-4 "
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
