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
} from "@nextui-org/react";
import FilterContentMobile from "./components/filterContentMobile";
import FilterContent from "./components/filterContent";
export default function Catalogo() {
  return (
    <main className="flex flex-row w-full h-full min-h-screen ">
      <section className="w-full h-full flex lg:border lg:flex-row flex-col">
        <aside className="p-10 lg:w-3/12 h-min-screen bg-gray-50 shadow lg:flex flex-initial max-w-[400px] hidden flex-col">
        <FilterContent></FilterContent>
        </aside>
        <aside className="w-full flex justify-end lg:hidden p-3 shadow-md">
          <Popover placement="top">
            <PopoverTrigger>
              <Chip color="success">Filtrar</Chip>
            </PopoverTrigger>
            <PopoverContent>
              <FilterContentMobile></FilterContentMobile>
            </PopoverContent>
          </Popover>
        </aside>
        <div className="w-full lg:w-9/12 h-full flex flex-col lg:flex-row gap-10 flex-wrap justify-center m-10">
          <motion.div whileHover={{ scale: 1.1 }}>
            <article className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
              <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
                <div className="w-full h-full">
                  <Image
                    src={tractor1}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    alt="portada"
                    className="object-cover"
                  ></Image>
                </div>
              </div>
              <div className="w-full h-fit text-xl text-center">Item 1</div>
            </article>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <article className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
              <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
                <div className="w-full h-full">
                  <Image
                    src={tractor1}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    alt="portada"
                    className="object-cover"
                  ></Image>
                </div>
              </div>
              <div className="w-full h-fit text-xl text-center">Item 1</div>
            </article>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <article className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
              <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
                <div className="w-full h-full">
                  <Image
                    src={tractor1}
                    layout="responsive"
                    width={1000}
                    height={1000}
                    alt="portada"
                    className="object-cover"
                  ></Image>
                </div>
              </div>
              <div className="w-full h-fit text-xl text-center">Item 1</div>
            </article>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
