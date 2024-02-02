import Image from "next/image";
import tractor1 from "../../public/images/tractor.png";
import tractor2 from "../../public/images/tractor2.webp";
import tractor3 from "../../public/images/tractor3.png";
import tractor4 from "../../public/images/tractor4.webp";
import tractor5 from "../../public/images/tractor5.png";
import tractor6 from "../../public/images/tractor6.jpg";

export default function Catalogo() {
  return (
    <main className="flex flex-row w-full h-full">
      <aside className="w-full h-screen bg-slate-200 lg:flex flex-initial max-w-[400px] hidden "></aside>
      <section className="w-full h-full flex-1 flex gap-5 lg:gap-32 lg:m-10 justify-around flex-wrap">
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
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
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
          <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
            <div className="w-full h-full">
              <Image
                src={tractor2}
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
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
          <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
            <div className="w-full h-full">
              <Image
                src={tractor3}
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
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
          <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
            <div className="w-full h-full">
              <Image
                src={tractor4}
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
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
          <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
            <div className="w-full h-full">
              <Image
                src={tractor5}
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
        <article className="w-full h-44 lg:w-96 lg:h-[450px] shadow-md flex flex-row lg:flex-col">
          <div className="w-36 h-36 lg:w-full lg:h-96 p-5 aspect-square">
            <div className="w-full h-full">
              <Image
                src={tractor6}
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
      </section>
    </main>
  );
}
