import { Github } from "lucide-react";
import Image from "next/image";
import ProgrammingBro from "../_assets/Programming-bro.svg";
import X from "../_assets/x.svg";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-[50vh] relative overflow-hidden">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold pb-2">
          Matías Viaggio
        </h1>
        <div className="flex gap-4 w-fit">
          <p className="p-1 rounded-md bg-black hover:bg-[#292929] w-fit text-sm text-white cursor-default flex items-center gap-1">
            <Github size={20} />
            @mativiaggio
          </p>
          <p className="p-1 rounded-md bg-black hover:bg-[#292929] w-fit text-sm text-white cursor-default flex items-center gap-1">
            <Image src={X} width={20} height={20} alt="Landing image" />
            @harto_dev
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={ProgrammingBro}
          width={0}
          height={0}
          alt="Landing image"
          className="!h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
