import Delimiter from "./Icons/Delimiter";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex flex-items items-center gap-1">
        Logo
        <Delimiter />
        <Button variant="outline" size="sm" className="text-sm font-semibold">
          Login with Google
        </Button>
      </div>
      <div className="flex items-center justify-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
