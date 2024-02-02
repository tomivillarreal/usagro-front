import Image from "next/image";
import tractor from "../../../../public/images/tractor.png";
export default function ItemEspecifico() {
  return (
    <main className="w-full h-full flex lg:flex-row flex-col lg:p-20 p-5 shadow-lg">
      {/* Galeria fotos */}
      <section className="lg:h-screen lg:w-1/3 flex justify-start items-center flex-col gap-5">
        <div className="lg:w-[500px] lg:h-[500px] w-full h-full shadow-md relative aspect-square">
          <Image
            src={tractor}
            layout="responsive"
            width={1000}
            height={1000}
            alt="portada"
            className="object-cover"
          ></Image>
        </div>
        <div className="lg:w-[500px] lg:h-52 flex flex-row flex-wrap gap-5 justify-center w-full h-full">
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
        </div>
      </section>
      {/* informacion unidad */}
      <section className="lg:h-screen lg:w-2/3 flex flex-col gap-4">
        <h1 className="lg:text-8xl text-6xl text-center">Tractor Jonh Deere</h1>
        <div className="flex flex-row justify-evenly">
          <h3 className="text-4xl ">$70.000</h3>
          <h3 className="text-4xl ">Villa María</h3>
        </div>
        <p className="font-bold text-xl">7200J</p>
        <ul>
          <li>• Tractor de 200 hp</li>
          <li>
            • Motor agrícola John Deere PowerTech™ de 6,8L y 6 cilindros de 200
            hp con inyección electrónica de alta presión Common Rail.
          </li>
          <li>
            • Transmisión AutoQuad™ Plus con 16 marchas de avance y 16 de
            retroceso.
          </li>
          <li>• Chasis de acero fundido de diseño integral</li>
          <li>
            • Equipado de fábrica con JDLink™ y piloto automático Autotrac™ .
          </li>
        </ul>
        <h3 className="text-4xl">Descripcion:</h3>
        <p className="">
          El tractor, impulsado por una potencia imponente de 200 caballos de
          fuerza, se destaca por su eficiencia y rendimiento excepcionales.
          Equipado con un motor agrícola John Deere PowerTech™ de 6,8 litros y 6
          cilindros, el corazón de esta máquina funciona con inyección
          electrónica de alta presión Common Rail, garantizando una respuesta
          instantánea y una potencia inigualable. La transmisión AutoQuad™ Plus,
          con sus 16 marchas de avance y 16 de retroceso, proporciona una
          versatilidad incomparable para adaptarse a una variedad de tareas
          agrícolas. Su diseño integral de chasis de acero fundido asegura una
          resistencia robusta y duradera, proporcionando una base sólida para
          enfrentar los desafíos del campo con facilidad. Este tractor va más
          allá de la maquinaria convencional al venir equipado de fábrica con
          tecnologías avanzadas como JDLink™ y el piloto automático Autotrac™,
          que no solo simplifican las operaciones, sino también mejoran la
          precisión y la eficiencia en el trabajo diario. Con 7200J de energía,
          este tractor representa una combinación perfecta de potencia,
          tecnología y durabilidad, elevando la productividad agrícola a nuevos
          niveles.
        </p>
        <div className="w-full flex justify-center">
          <button className="bg-[#fcdc5c] h-max w-max p-4">Contactar</button>
        </div>
      </section>
    </main>
  );
}
