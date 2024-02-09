"use client";


import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import FilterContent from "../components/filterContent";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CatalogoFullWidth from "../components/catalogoFullWidth";
import CatalogoNormal from "../components/catalogoNormal";
export default function Categoria() {
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
