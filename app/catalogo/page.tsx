"use client";

import Image from "next/image";
import tractor1 from "../../public/images/tractor.png";
import tractor2 from "../../public/images/tractor2.webp";
import tractor3 from "../../public/images/tractor3.png";
import tractor4 from "../../public/images/tractor4.webp";
import tractor5 from "../../public/images/tractor5.png";
import tractor6 from "../../public/images/tractor6.jpg";
import { motion } from "framer-motion";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Chip,
  Button,
} from "@nextui-org/react";
import FilterContentMobile from "./components/filterContentMobile";
import FilterContent from "./components/filterContent";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CatalogoFullWidth from "./components/catalogoFullWidth";
import CatalogoNormal from "./components/catalogoNormal";
export default function Catalogo() {
  const router = useRouter();
  const [catalogoFullWidth, setCatalogoFullWidth] = useState(true);
  return (
    <main className="flex flex-row w-full h-full min-h-screen ">
      <section className="w-full h-full flex lg:border flex-col">
        <div className="w-full flex lg:justify-evenly justify-between lg:flex shadow-md">
          {/* MOBILE */}
          <div className="lg:hidden flex flex-col gap-10 w-full">
            <div className="flex flex-row justify-around items-center shadow-md p-3 bg-[#cfc9b1]">

            <Button
              color="secondary"
              onClick={() => setCatalogoFullWidth(!catalogoFullWidth)}
            >
              Cambiar vista
            </Button>
            <Popover placement="top">
              <PopoverTrigger>
                <Button color="success">Filtrar</Button>
              </PopoverTrigger>
              <PopoverContent className="w-fit">
                <FilterContent></FilterContent>
              </PopoverContent>
            </Popover>
            </div>
            {catalogoFullWidth ? (
              <CatalogoFullWidth></CatalogoFullWidth>
            ) : (
              <CatalogoNormal></CatalogoNormal>
            )}
          </div>

          {/* DESKTOP */}
          <div className="w-full hidden lg:flex flex-col gap-10 justify-between shadow-md">
          <div className="flex flex-row justify-around items-center shadow-md p-3 bg-[#cfc9b1]">

            <Button
              color="secondary"
              onClick={() => setCatalogoFullWidth(!catalogoFullWidth)}
            >
              Cambiar vista
            </Button>
            {catalogoFullWidth ? (
              <Popover placement="top">
                <PopoverTrigger>
                  <Button color="success">Filtrar</Button>
                </PopoverTrigger>
                <PopoverContent className="w-screen max-w-[1200px]">
                  <FilterContent></FilterContent>
                </PopoverContent>
              </Popover>
            ) : null}
            </div>
            <div>

            {catalogoFullWidth ? (
              <CatalogoFullWidth></CatalogoFullWidth>
            ) : (
              <CatalogoNormal></CatalogoNormal>
            )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
