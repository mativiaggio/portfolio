"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/navbar-menu";
import { CodeXml, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import NavbarMenuButton from "./NavbarMenuButton";

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleCloseNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="relative z-10">
      <div className="flex h-fit max-h-[10vh] items-center justify-between border-b border-main-border-light bg-white px-4 py-2 sm:px-6 md:px-8 lg:px-10">
        <div className="flex gap-4">
          <div className="flex">
            <Link className="flex items-center justify-center" href="/inicio">
              <CodeXml className="text-primary h-6 w-6" />
              <span className="text-primary ml-2 text-2xl font-bold w-fit">
                Matías Viaggio
              </span>
            </Link>
          </div>
          <Menu setActive={setActive}>
            <div className="hidden w-full lg:flex">
              <NavbarItems />
            </div>
          </Menu>
        </div>
        <div className="block lg:hidden">
          <Button
            onClick={handleToggleNavbar}
            className="px-0 bg-white hover:bg-white border-none shadow-none">
            <NavbarMenuButton />
          </Button>
        </div>
      </div>

      <div
        id="mobile-navbar"
        className={`fixed left-0 top-0 h-screen w-full transform transition-transform duration-150 ease-in-out lg:hidden ${
          isNavbarOpen
            ? "translate-x-0 overflow-hidden"
            : "-translate-x-full overflow-auto"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navbar-title">
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:ring-gray-900/10">
          <div className="flex h-fit max-h-[10vh] min-h-[57px] items-center justify-between px-0 py-2 sm:px-2 md:px-4 lg:px-6">
            <span className="-m-1.5 p-1.5">
              <span className="sr-only">Matías Viaggio</span>
              <div>
                <Link className="flex items-center justify-center" href="#">
                  <CodeXml className="text-primary h-6 w-6" />
                  <span className="text-primary ml-2 text-2xl font-bold">
                    Matias Viaggio
                  </span>
                </Link>
              </div>
            </span>
            <button
              id="close-mobile-navbar"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[var(--main-text-light)] dark:text-[var(--main-text-dark)]"
              onClick={handleCloseNavbar}>
              <span className="sr-only">Close menu</span>
              <X color="red" />
            </button>
          </div>
          <div className="mt-6 flow-root text-[var(--main-text-light)] dark:text-[var(--main-text-dark)]">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col">
                <NavbarItems className="flex flex-col items-start" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
