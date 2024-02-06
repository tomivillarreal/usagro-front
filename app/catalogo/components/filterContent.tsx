import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Slider,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function FilterContent() {
  const [selectedKeys, setSelectedKeys] = useState<String>("Menor Precio");

  return (
    <div>
      <div className="flex items-center gap-3">
        <p>Ordenar por</p>
        <Dropdown>
          <DropdownTrigger>
            <Button color="secondary">{selectedKeys}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            onAction={(e) => setSelectedKeys(e.toString())}
          >
            <DropdownItem key="Menor Precio">Menor Precio</DropdownItem>
            <DropdownItem key="Mayor Precio">Mayor Precio</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Divider className="my-4" />
      <div></div>
      <p>Categoria</p>
      <Divider className="my-4" />
      <div></div>
      <p>Marca</p>
      <Divider className="my-4" />
      <div></div>
      <p>Modelo</p>
      <Divider className="my-4" />
      <div></div>
      <p>Condicion</p>
      <Divider className="my-4" />
      <div></div>
      <p>Ubicacion</p>
      <Divider className="my-4" />
      <div></div>
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
