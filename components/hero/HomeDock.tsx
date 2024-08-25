import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import {
  BadgeInfo,
  ChartGantt,
  File,
  House,
  MessageCircle,
} from "lucide-react";

export function HomeDock() {
  const links = [
    {
      title: "Inicio",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-red-400" />
      ),
      href: "#",
    },
    {
      title: "Experiencia",
      icon: (
        <ChartGantt className="h-full w-full text-neutral-500 dark:text-red-400" />
      ),
      href: "#experiencia-laboral",
    },
    {
      title: "Acerca de mí",
      icon: (
        <BadgeInfo className="h-full w-full text-neutral-500 dark:text-red-400" />
      ),
      href: "#",
    },
    {
      title: "Contacto",
      icon: (
        <MessageCircle className="h-full w-full text-neutral-500 dark:text-red-400" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
