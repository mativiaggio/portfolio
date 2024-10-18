"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import { NavbarItems, NavbarItemsMobile } from "./NavbarItems";
import NavbarMenuButton from "./NavbarMenuButton";

const Navbar: React.FC = () => {
  return (
    <div className="relative z-10">
      <div className="flex h-fit max-h-[10vh] items-center justify-between border-b border-main-border-light bg-white px-4 py-2 sm:px-6 md:px-8 lg:px-10">
        <div className="flex gap-4">
          <div className="flex">
            <Link className="flex items-center justify-center" href="/inicio">
              <CodeXml className="text-primary h-6 w-6" />
              <span className="ml-2 text-2xl font-bold w-fit">
                Matías Viaggio
              </span>
            </Link>
            <NavbarItems className="hidden lg:flex" />
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="block lg:hidden">
            <NavbarMenuButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="sr-only">Navbar</SheetDescription>
              <SheetDescription>
                <NavbarItemsMobile />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
