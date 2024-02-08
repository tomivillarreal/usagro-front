"use client";

import Image from "next/image";
import tractor from "../../../../public/images/tractor.png";
import tractor2 from "../../../../public/images/tractor2.webp";
// import tractor3 from "../../../../public/images/tractor3.png";
// import tractor4 from "../../../../public/images/tractor4.webp";
// import tractor5 from "../../../../public/images/tractor5.png";
import phone from "../../../../public/phone.png";
import whatsapp from "../../../../public/whatsapp.webp";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Link from "next/link";
import CarruselItem from "../../components/carruselItem";
import { useRouter } from "next/navigation";
import data from "./data.json"

export default function ItemEspecifico({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter()
  return (
    <main className="w-full h-full shadow-lg lg:p-20 p-5">
      {/* Galeria fotos */}
      <div className="w-full h-fit">
        <Breadcrumbs>
          <BreadcrumbItem onClick={()=> router.push("/")}>Home</BreadcrumbItem>
          <BreadcrumbItem onClick={()=> router.push("/catalogo")}>Catalogo</BreadcrumbItem>
          <BreadcrumbItem>Tractores</BreadcrumbItem>
          <BreadcrumbItem>{id}</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="w-full h-full flex lg:flex-row flex-col gap-5 shadow-lg">
        <section className="lg:h-full lg:w-1/3 flex justify-start items-center flex-col gap-5 ">
          <div className="lg:max-w lg:max-h-[500px] h-full shadow-md relative aspect-square">
            <div className="h-fit w-fit">
              <Image
                src={tractor}
                layout="responsive"
                width={1000}
                height={1000}
                alt="portada"
                className="object-contain"
              ></Image>
            </div>
          </div>
          <div className="w-full h-36 ">
            <CarruselItem
              images={[
                tractor,
                tractor2,
                tractor,
                tractor,
                tractor,
                tractor,
                tractor,
                tractor,
              ]}
            ></CarruselItem>
            {/* <div className="h-36 w-36 shadow-md aspect-square">
            {" "}
            <Image
              src={tractor}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="h-36 w-36 shadow-md aspect-square">
            {" "}
            <Image
              src={tractor}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div>
          <div className="h-36 w-36 shadow-md aspect-square">
            {" "}
            <Image
              src={tractor}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </div> */}
          </div>
        </section>
        {/* informacion unidad */}
        <section className="lg:h-full lg:w-2/3 flex flex-col gap-4">
          <h1 className="lg:text-8xl text-6xl text-center">
          {data.nombre}
          </h1>
          <div className="flex flex-row justify-evenly">
            <h3 className="text-4xl ">${data.precio}</h3>
            <h3 className="text-4xl ">{data.localidad}</h3>
          </div>
          <p className="font-bold text-xl">{data.modelo}</p>
          <ul>
           {data.caracteristicas.map((e, index)=>{
            return (<li key={index}>
              {e}
            </li>)
           })}
          </ul>
          <h3 className="text-4xl">Descripcion:</h3>
          <p className="">
            {data.descripcion}
          </p>
          <div className="w-full flex justify-center">
            <Button className="h-10 w-10 bg-white" isIconOnly>
              <Link href={"https://w.app/usagro"}>
                <Image src={whatsapp} fill alt="phone"></Image>
              </Link>
            </Button>
            <Button className="h-10 w-10 p-4 bg-white" isIconOnly>
              <Link href={"tel:3536573126"}>
                <Image src={phone} fill alt="phone"></Image>
              </Link>
            </Button>{" "}
          </div>
        </section>
      </div>
    </main>
  );
}
