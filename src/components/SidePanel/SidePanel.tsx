import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/Sheet/Sheet";
import { Button } from "@/components/button";
import { Menu } from "react-feather";

export function SidePanel(props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetTitle>Chat history</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
