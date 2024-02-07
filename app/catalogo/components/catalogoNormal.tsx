
import tractor1 from "../../../public/images/tractor.png";
import tractor2 from "../../../public/images/tractor2.webp";
import tractor3 from "../../../public/images/tractor3.png";
import tractor4 from "../../../public/images/tractor4.webp";
import tractor5 from "../../../public/images/tractor5.png";
import tractor6 from "../../../public/images/tractor6.jpg";

import { Button, Card } from "@nextui-org/react"
import {motion} from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import FilterContent from "./filterContent";




export default function CatalogoNormal(){
    
    const router = useRouter()

    return (
        <div className="flex flex-row">
        <aside className="p-10 lg:w-3/12 h-min-screen bg-gray-50 shadow lg:flex flex-initial max-w-[400px] hidden flex-col">
        <FilterContent></FilterContent>
        </aside>
        <div className="w-full lg:w-9/12 h-full flex flex-col lg:flex-row gap-10 flex-wrap justify-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
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
            </Card>
          </motion.div>
        </div>
        </div>
    )
}