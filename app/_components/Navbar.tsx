import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, CodeXml } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full gap-8 p-4 items-center border-b">
      <div className="flex gap-4">
        <CodeXml />
        <p className="font-bold">Matias Viaggio</p>
      </div>

      <nav className="flex gap-4">
        <HoverCard>
          <HoverCardTrigger className="font-bold flex cursor-default hover:bg-gray-200 transition-all p-1 rounded-sm gap-2 text-sm items-center">
            Projects
            <ChevronDown size={20} />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit flex flex-col">
            <Link href={"#"} className="p-2 hover:bg-gray-200">
              Profesional work
            </Link>
            <Link href={"#"} className="p-2 hover:bg-gray-200">
              Volunteer work
            </Link>
            <Link href={"#"} className="p-2 hover:bg-gray-200">
              Hobbie
            </Link>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="font-bold flex cursor-default hover:bg-gray-200 transition-all p-1 rounded-sm gap-2 text-sm items-center">
            About me
            <ChevronDown size={20} />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit"></HoverCardContent>
        </HoverCard>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
