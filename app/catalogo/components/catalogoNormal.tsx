
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
import ItemCatalogo from "./itemCatalogo";




export default function CatalogoNormal(){
    
    const router = useRouter()

    return (
        <div className="flex flex-row">
        <aside className="p-10 lg:w-3/12 h-min-screen bg-gray-50 shadow lg:flex flex-initial max-w-[400px] hidden flex-col">
        <FilterContent></FilterContent>
        </aside>
        <div className="w-full lg:w-9/12 h-full flex flex-col lg:flex-row gap-10 flex-wrap justify-center">
          <ItemCatalogo image={tractor1} nombre={"Tractor John Deere"}></ItemCatalogo>
          <ItemCatalogo image={tractor2} nombre={"Tractor Polemico"}></ItemCatalogo>
          <ItemCatalogo image={tractor3} nombre={"Tractor no tan polemico"}></ItemCatalogo>
          <ItemCatalogo image={tractor4} nombre={"Item 1"}></ItemCatalogo>
          <ItemCatalogo image={tractor5} nombre={"Item 1"}></ItemCatalogo>
          <ItemCatalogo image={tractor6} nombre={"Item 1"}></ItemCatalogo>

        </div>
        </div>
    )
}