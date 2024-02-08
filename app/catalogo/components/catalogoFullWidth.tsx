import tractor1 from "../../../public/images/tractor.png";
import tractor2 from "../../../public/images/tractor2.webp";
import tractor3 from "../../../public/images/tractor3.png";
import tractor4 from "../../../public/images/tractor4.webp";
import tractor5 from "../../../public/images/tractor5.png";
import tractor6 from "../../../public/images/tractor6.jpg";

import { Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carrusel from "./carrussel";
export default function CatalogoFullWidth() {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-20 h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Card className="flex lg:flex-row lg:max-h-full flex-col  h-full w-full">
          {/* Imagen */}
          <div className="lg:w-1/3 h-max w-full p-10">
            <div className="h-full w-full relative">
              {/* <motion.div
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
            </motion.div> */}
              <Carrusel
                images={[tractor1, tractor2, tractor3, tractor4]}
              ></Carrusel>
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
            <Button
              className="h-max w-max p-4 "
              color="success"
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </Button>
          </div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Card className="flex lg:flex-row-reverse lg:max-h-full flex-col h-full w-full">
          {/* Imagen */}
          <div className="lg:w-1/3 h-max w-full p-10">
            <div className="h-full w-full relative">
              {/* <motion.div
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
            </motion.div> */}
              <Carrusel
                images={[tractor1, tractor2, tractor3, tractor4]}
              ></Carrusel>
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
            <Button
              className="h-max w-max p-4 "
              color="success"
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </Button>
          </div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Card className="flex lg:flex-row lg:max-h-full flex-col  h-full w-full">
          {/* Imagen */}
          <div className="lg:w-1/3 h-max w-full p-10">
            <div className="h-full w-full relative">
              {/* <motion.div
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
            </motion.div> */}
              <Carrusel
                images={[tractor2, tractor1,  tractor3, tractor4]}
              ></Carrusel>
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
            <Button
              className="h-max w-max p-4 "
              color="success"
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </Button>
          </div>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Card className="flex lg:flex-row-reverse lg:max-h-full flex-col  h-full w-full">
          {/* Imagen */}
          <div className="lg:w-1/3 h-max w-full p-10">
            <div className="h-full w-full relative">
              {/* <motion.div
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
            </motion.div> */}
              <Carrusel
                images={[tractor3,tractor1, tractor2,  tractor4]}
              ></Carrusel>
            </div>
          </div>
          {/* Caracteristicas */}
          <div className="w-full h-full p-10 flex flex-col justify-around gap-10 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl">Tractor Jonh Deere</h1>
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
            <Button
              className="h-max w-max p-4 "
              color="success"
              onClick={() => router.push("/catalogo/item/1")}
            >
              Ver mas
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
