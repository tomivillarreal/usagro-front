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
export default function Catalogo() {
  const router = useRouter();
  const [catalogoFullWidth, setCatalogoFullWidth] = useState(true);
  return (
    <main className="flex flex-row w-full h-full min-h-screen ">
      <section className="w-full h-full flex lg:border flex-col">
        <aside className="w-full justify-center hidden lg:flex p-3 shadow-md">
          <Popover placement="top">
            <PopoverTrigger>
              <Chip color="success">Filtrar</Chip>
            </PopoverTrigger>
            <PopoverContent className="w-screen">
              <FilterContent></FilterContent>
            </PopoverContent>
          </Popover>
          <Button
            color="secondary"
            onClick={() => setCatalogoFullWidth(!catalogoFullWidth)}
          >
            Cambiar vista
          </Button>
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
        {catalogoFullWidth ? (
          <section className="flex flex-col gap-20 h-full w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor1}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row-reverse lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor2}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor4}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row-reverse lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor3}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor5}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <article className="flex lg:flex-row-reverse lg:max-h-full flex-col shadow-xl h-full w-full">
                {/* Imagen */}
                <div className="lg:w-2/3 h-max w-full">
                  <div className="h-full w-full relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={tractor6}
                        layout="responsive"
                        width={1000}
                        height={1000}
                        alt="portada"
                        className="object-cover"
                      ></Image>
                    </motion.div>
                  </div>
                </div>
                {/* Caracteristicas */}
                <div className="w-full h-full p-10  flex flex-col justify-around gap-10 items-center">
                  <div>
                    <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
                    <h2 className="text-3xl">$70.000 USD</h2>
                    <p>7200J</p>
                    <ul>
                      <li>Tractor de 200 hp</li>
                      <li>
                        Motor agrícola John Deere PowerTech™ de 6,8L y 6
                        cilindros de 200 hp con inyección electrónica de alta
                        presión Common Rail.
                      </li>
                      <li>
                        Transmisión AutoQuad™ Plus con 16 marchas de avance y 16
                        de retroceso.
                      </li>
                      <li>Chasis de acero fundido de diseño integral</li>
                      <li>
                        Equipado de fábrica con JDLink™ y piloto automático
                        Autotrac™ .
                      </li>
                    </ul>
                  </div>
                  <Button
                    className="h-max w-max p-4 "
                    color="success"
                    onClick={() => router.push("/catalogo/item/1")}
                  >
                    Ver mas
                  </Button>
                </div>
              </article>
            </motion.div>
          </section>
        ) : (
          <div>
          <aside className="p-10 lg:w-3/12 h-min-screen bg-gray-50 shadow lg:flex flex-initial max-w-[400px] hidden flex-col">
          <FilterContent></FilterContent>
          </aside>
          <div className="w-full lg:w-9/12 h-full flex flex-col lg:flex-row gap-10 flex-wrap justify-center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
            </motion.div>{" "}
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
            </motion.div>{" "}
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
            </motion.div>{" "}
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
            </motion.div>{" "}
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
            </motion.div>{" "}
            <motion.div whileHover={{ scale: 1.1 }}>
              <article
                className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col"
                onClick={() => router.push("/catalogo/item/1")}
              >
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
          </div>
          
        )}
      </section>
    </main>
  );
}
