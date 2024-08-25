"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { House, BadgeInfo, MessageCircle, ChartGantt } from "lucide-react";
export function Navbar() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experiencia",
      link: "#experiencia-laboral",
      icon: <ChartGantt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Acerca de mí",
      link: "/about",
      icon: <BadgeInfo className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contacto",
      link: "/contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
