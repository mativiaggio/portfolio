import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "../ui/badge";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { Database } from "lucide-react";
import { SiJquery } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HomeTimeline() {
  const data = [
    {
      title: "Feb 2023 - Now",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            Full Stack Web Developer
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            In February 2023, I was promoted to the web development area at the
            company where I work, allowing me to continue working in the field I
            truly enjoy—web development. I began developing both backend and
            frontend solutions, and although the technology stack was different
            from what I was used to, I had the opportunity to become familiar
            with a tool that over 70% of web applications still use today:
            jQuery. I also experienced web development using vanilla JavaScript,
            which was a departure from my usual approach. Here, every
            requirement was met by hand, without relying on third-party plugins
            or packages. This has been a rewarding experience, one that I
            continue to enjoy to this day.
          </p>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <SiJquery />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>JQuery</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <BsBootstrap />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bootstrap</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2022 - Feb 2023",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            Backend Developer
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            In November 2022, I began working as a backend developer at a
            company, where I was responsible for maintaining a legacy program
            dedicated to automating processes for import and export freight
            agents. During this period, I distanced myself somewhat from web
            development. Although I had personal projects, I struggled to find a
            balance between work and my hobby, so web development was put on
            standby. However, this job allowed me to expand my understanding of
            other aspects of programming, such as interacting with SQL databases
            and getting introduced to strongly typed languages.
          </p>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <Database />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>SQL</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2022 - Nov 2022",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            Beginnings in Web Development
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            My journey into web development began as a personal hobby in January
            2022. I started by creating simple static web pages, driven by
            curiosity and a desire to learn. During this time, I also began my
            studies with online courses, where I learned the foundations of
            HTML, CSS, and JavaScript. Later on, I discovered ReactJS, and that
            was where everything changed for me. React opened up new
            possibilities and fueled my passion for building dynamic and
            interactive web applications. Although it was just a hobby, this
            period sparked a genuine interest that would later guide me into a
            full-time career in the field.
          </p>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <IoLogoHtml5 />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML5</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <IoLogoCss3 />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>CSS3</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <IoLogoJavascript />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>JavaScript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#1E90FF_50%,#B0E0E6_100%)]" />
                    <span className="text-2xl inline-flex h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
                      <IoLogoReact />
                    </span>
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>ReactJs</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full overflow-hidden px-6 md:px-12 lg:px-24">
      <Timeline data={data} />
    </div>
  );
}
