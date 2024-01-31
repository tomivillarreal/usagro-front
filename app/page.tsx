import Image from "next/image";
import portada from "../public/images/portada.jpg";
export default function Home() {
  return (
    <main className="w-full h-full">
      {/* Call to action */}
      <section className="w-full h-full relative  ">
        <div className="relative w-screen h-screen z-0">
          <Image src={portada} fill alt="portada"></Image>
        </div>
        <div className="absolute top-0 w-full h-full z-10">
          <div className="flex h-full w-full justify-center items-center">
            <div className="w-96 justify-center items-center text-center flex flex-col gap-3">
              <h1 className="text-white BOLD text-5xl"> USAGRO </h1>
              <p className="text-white text-3xl">
                ¡Optimiza con nuestras máquinas agrícolas usadas! ¡Haz crecer tu
                negocio ya!{" "}
              </p>
              <button className="bg-white h-max w-max p-2">Ver Catalogo</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
