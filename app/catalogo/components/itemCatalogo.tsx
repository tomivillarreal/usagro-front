import { Card } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import data from "../[categoria]/item/[id]/data.json";

export default function ItemCatalogo({
  image,
  nombre,
}: {
  image: any;
  nombre: any;
}) {
  const router = useRouter();

  return (
    <div className="w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
      <motion.div
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="absolute cursor-pointer w-full h-44 lg:max-w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col aspect-square"
        onClick={() => router.push("/catalogo/tractores/item/1")}
      >
        <div className="w-full h-full aspect-square backdrop-blur-sm">
          <h1 className="text-4xl text-center">{data.nombre}</h1>
          <div className="flex flex-row justify-evenly">
            <h3 className="text-xl ">${data.precio}</h3>
            <h3 className="text-xl ">{data.localidad}</h3>
          </div>
        </div>
      </motion.div>
      <div>
        <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square z-0">
          <div className="w-full h-full">
            <Image
              src={image}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="w-full h-fit text-xl text-center">{nombre}</div>
      </div>
    </div>
  );
}
