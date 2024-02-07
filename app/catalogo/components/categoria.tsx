import Image from "next/image";
import tractor from "../../../public/images/tractor.png";
import cosechadora from "../../../public/images/cosechadora.avif";
import fertilizadora from "../../../public/images/fertilizadora.png";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
export default function Categoria() {
  return (
      <div className="w-full h-full flex flex-row gap-5 flex-wrap">
        <div className="w-40 h-40  shadow-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={tractor}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </motion.div>
          <h1 className="w-full text-center">Tractores</h1>
        </div>
        <Card  className="w-40 h-40">
          <CardBody className="h-full w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={tractor}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </motion.div>
          </CardBody>
          <CardFooter>          <h1 className="w-full text-center">Tractores</h1>
</CardFooter>
        </Card>
        <div className="w-40 h-40  shadow-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={cosechadora}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </motion.div>
          <h1 className="w-full text-center">Cosechadora</h1>
        </div>
        <div className="w-40 h-40  shadow-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={fertilizadora}
              layout="responsive"
              width={1000}
              height={1000}
              alt="portada"
              className="object-cover"
            ></Image>
          </motion.div>
          <h1 className="w-full text-center">Fertilizadora</h1>
        </div>
      </div>
  );
}
