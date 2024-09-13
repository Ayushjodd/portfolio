"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Header } from "@/components/main/Header";
import AboutMe from "@/components/main/AboutMe";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import OpenSource from "@/components/main/OpenSource";
import { Badge } from "@/components/ui/badge";
import BlurIn from "@/components/magicui/blur-in";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-full w-full flex-col rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="max-w-4xl mx-[25%] flex justify-between mt-16 border-b pb-4">
        <div className="flex items-center">
          <BlurIn
            word="Ayush "
            className="text-4xl font-bold text-black dark:text-white"
          />
          <span className="ml-2 text-base">
            <Badge>Hire Me! ❤️</Badge>
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto p-4 text-4xl"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="max-w-4xl mx-[25%] mt-4 border-b pb-4">
        <Header />
      </div>

      <div className="max-w-4xl mx-[25%] mt-4 border-b pb-4">
        <AboutMe />
      </div>
      <div className="max-w-4xl mx-[25%] mt-4 border-b pb-4">
        <Projects />
      </div>
      <div className="max-w-4xl mx-[25%] mt-4 border-b pb-4">
        <Skills />
      </div>
      <div className="max-w-4xl mx-[25%] mt-4 border-b pb-4">
        <OpenSource />
      </div>
    </div>
  );
}
