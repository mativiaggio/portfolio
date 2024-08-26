"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { HomeDock } from "./HomeDock";
import Image from "next/image";

export function HomeHero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto max-h-screen flex flex-col justify-center items-center h-screen font-medium">
        <div className="rounded-full h-fit w-fit overflow-hidden">
          <Image
            src="/images/me.webp"
            alt="me"
            width={200} // Define un valor adecuado para width
            height={200} // Define un valor adecuado para height
            className="!h-[150px] !w-[150px] md:!h-[200px] md:!w-[200px]"
          />
        </div>
        <br />
        Hi there! I&apos;m Matías Viaggio, I&apos;m a
        <Highlight className="text-black dark:text-white">
          web developer.
        </Highlight>
        <br />
        <HomeDock />
      </motion.h1>
    </HeroHighlight>
  );
}
