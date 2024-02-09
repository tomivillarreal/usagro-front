import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardCategoria({
  image,
  nombre,
}: {
  image: any;
  nombre: string;
}) {
    const router = useRouter()

  return (
    <div onClick={()=>{router.push(`/catalogo/${nombre.toLowerCase()}`)}}>


    <Card className="w-40 h-40 cursor-pointer" >
      <CardBody className="h-full w-full overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Image
            src={image}
            layout="responsive"
            width={1000}
            height={1000}
            alt="portada"
            className="object-cover"
          ></Image>
        </motion.div>
      </CardBody>
      <CardFooter>
        <h1 className="w-full text-center">{nombre}</h1>
      </CardFooter>
    </Card>
    </div>
  );
}
