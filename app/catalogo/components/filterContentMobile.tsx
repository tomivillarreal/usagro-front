import { Accordion, AccordionItem, Slider } from "@nextui-org/react";

export default function FilterContentMobile() {
  return (
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Ordenar por" title="Ordenar por">
          {""}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Categoria" title="Categoria">
          {""}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Marca" title="Marca">
          {""}
        </AccordionItem>
        <AccordionItem key="4" aria-label="Modelo" title="Modelo">
          {""}
        </AccordionItem>
        <AccordionItem key="5" aria-label="Condicion" title="Condicion">
          {""}
        </AccordionItem>
        <AccordionItem key="6" aria-label="Ubicacion" title="Ubicacion">
          {""}
        </AccordionItem>
      </Accordion>
      <p>Precio</p>
      <Slider
        label="USD"
        step={0.01}
        maxValue={1}
        minValue={0}
        defaultValue={0.4}
        className="max-w-md"
        size="md"
      />
    </div>
  );
}
