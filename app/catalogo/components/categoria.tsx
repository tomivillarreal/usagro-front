import tractor from "../../../public/images/tractor.png";
import cosechadora from "../../../public/images/cosechadora.avif";
import fertilizadora from "../../../public/images/fertilizadora.png";
import CardCategoria from "./cardCategoria";
export default function Categoria() {
  return (
    <div className="flex flex-row gap-5 flex-wrap w-full h-full">
      <CardCategoria image={tractor} nombre="Tractores"></CardCategoria>
      <CardCategoria image={cosechadora} nombre="Cosechadoras"></CardCategoria>
      <CardCategoria image={fertilizadora} nombre="Fertilizadoras"></CardCategoria>
    </div>
  );
}
