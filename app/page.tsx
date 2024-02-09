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
import { motion } from "framer-motion";
import SliderInfinity from "./components/sliderInfinity/component";
import { Button } from "@nextui-org/react";
import Categoria from "./catalogo/components/categoria";
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
              <Button
                className="h-max w-max p-4 text-white"
                onClick={() => router.push("/catalogo")}
                color="secondary"
              >
                Ver Catalogo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SliderInfinity></SliderInfinity>
      {/* PRIMER CATALOGO */}
    <div className="p-10 flex flex-row items-center justify-center w-full h-full ">

    <Categoria></Categoria>
    </div>


    </main>
  );
}
