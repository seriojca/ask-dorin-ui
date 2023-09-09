"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import DarkAndLightAnimatedIcon from "./dark-light-animated-icon";
import { Theme } from "@/types/global";
import { Button } from "@/components/button";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button variant="outline" size="icon" onClick={switchTheme}>
      <DarkAndLightAnimatedIcon theme={theme as Theme} />
    </Button>
  );
}
