"use client";

import { useRouter } from "next/navigation";
import Categoria from "./components/categoria";

export default function Catalogo() {
  return (
    <main className="w-full h-full min-h-screen">
        <Categoria></Categoria>
    </main>
  );
}
