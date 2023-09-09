"use client";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./button";
import { SidePanel } from "@/components/SidePanel/SidePanel";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex flex-items items-center gap-4">
        <SidePanel />
        <Image
          src={theme === "dark" ? "/logo.svg" : "/logo_white.svg"}
          alt={"Logo image"}
          width={132}
          height={24}
        />
      </div>
      <div className="flex items-center justify-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
