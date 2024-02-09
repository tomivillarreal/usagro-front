import { Input } from "@nextui-org/react";



export default function LogIn(){
    return(
    <div className="flex justify-center w-full min-h-screen items-baseline ">
            <div className="w-64 p-5 h-max bg-slate-800 gap-5 flex flex-col">
                <h1 className="text-white"> Iniciar Sesion</h1>
                <Input></Input>
                <Input></Input>
            </div>
    </div>)
};
