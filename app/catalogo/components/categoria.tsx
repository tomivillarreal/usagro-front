import Image from "next/image";
import tractor from "../../../public/images/tractor.png";
import cosechadora from "../../../public/images/cosechadora.avif";
import fertilizadora from "../../../public/images/fertilizadora.png";

export default function Categoria() {
  return (
    <div>
      <div className="w-full h-full flex flex-row gap-5 flex-wrap">
        <div className="w-40 h-40  shadow-lg">
          <Image
            src={tractor}
            layout="responsive"
            width={1000}
            height={1000}
            alt="portada"
            className="object-cover"
          ></Image>
          <h1 className="w-full text-center">Tractores</h1>
        </div>
        <div className="w-40 h-40  shadow-lg">
          <Image
            src={cosechadora}
            layout="responsive"
            width={1000}
            height={1000}
            alt="portada"
            className="object-cover"
          ></Image>
          <h1 className="w-full text-center">Cosechadora</h1>
        </div>
        <div className="w-40 h-40  shadow-lg">
          <Image
            src={fertilizadora}
            layout="responsive"
            width={1000}
            height={1000}
            alt="portada"
            className="object-cover"
          ></Image>
          <h1 className="w-full text-center">Fertilizadora</h1>
        </div>
      </div>
    </div>
  );
}
