"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const portfolioItems: { title: string; href: string; description: string }[] = [
  {
    title: "Professional work",
    href: "/portfolio/professional-work",
    description: "",
  },
  {
    title: "Volunteer work",
    href: "/portfolio/volunteer-work",
    description: "",
  },
  {
    title: "Hobbies work",
    href: "/portfolio/hobbie-work",
    description: "",
  },
];

const certificationItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Frontend",
    href: "/certifications/frontend",
    description: "",
  },
  {
    title: "Backend",
    href: "/certifications/backend",
    description: "",
  },
  {
    title: "Cybersecurity",
    href: "/certifications/cybersecurity",
    description: "",
  },
];

interface NavbarItemsProps {
  className?: string;
}

export function NavbarItems({ className }: NavbarItemsProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={className}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold">
            Portfolio
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[100px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[300px] ">
              {portfolioItems.map((portfolioItem) => (
                <ListItem
                  key={portfolioItem.title}
                  title={portfolioItem.title}
                  href={portfolioItem.href}>
                  {portfolioItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="!m-0">
          <NavigationMenuTrigger className="font-semibold">
            Certifications
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[100px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[300px] ">
              {certificationItems.map((certificationItem) => (
                <ListItem
                  key={certificationItem.title}
                  title={certificationItem.title}
                  href={certificationItem.href}>
                  {certificationItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavbarItemsMobile() {
  const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(true);
  const [isCertificationsOpen, setIsCertificationsOpen] = React.useState(true);

  return (
    <>
      <Collapsible
        open={isPortfolioOpen}
        onOpenChange={setIsPortfolioOpen}
        className="space-y-2 py-6">
        <div className="flex justify-start">
          <CollapsibleTrigger asChild className="flex justify-start">
            <Button
              size="sm"
              className="w-full bg-transparent text-font-primary text-sm shadow-none hover:bg-transparent p-0">
              <span className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full justify-between font-bold">
                Portfolio
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {portfolioItems.map((portfolioItem) => (
            <ListItemMobile
              key={portfolioItem.title}
              title={portfolioItem.title}
              href={portfolioItem.href}>
              {portfolioItem.description}
            </ListItemMobile>
          ))}
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isCertificationsOpen}
        onOpenChange={setIsCertificationsOpen}
        className="space-y-2 py-4">
        <div className="flex justify-start">
          <CollapsibleTrigger asChild className="flex justify-start">
            <Button
              size="sm"
              className="w-full bg-transparent text-font-primary text-sm shadow-none hover:bg-transparent p-0">
              <span className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full justify-between font-bold">
                Certifications
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {certificationItems.map((certificationItem) => (
            <ListItemMobile
              key={certificationItem.title}
              title={certificationItem.title}
              href={certificationItem.href}>
              {certificationItem.description}
            </ListItemMobile>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

const ListItemMobile = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <a
        ref={ref}
        className={cn(
          "select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex justify-start",
          className
        )}
        {...props}>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItemMobile.displayName = "ListItemMogile";
