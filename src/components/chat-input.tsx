"use client";
import React from "react";
import { Button } from "@/components/button";
import { Check, Plus, Send } from "lucide-react";
import { Input } from "@/components/Input/Input";

export function ChatInput(props) {
  const [input, setInput] = React.useState("");
  const inputLength = input.length;

  return (
    <div
      className={
        "absolute border-t h-32 bottom-0 w-full flex items-center justify-center backdrop-blur-xl mr-4"
      }
    >
      <div className="w-[80%] max-w-[1200px] flex items-center gap-4">
        <Input
          id="message"
          placeholder="Type your message..."
          className="flex-1"
          autoComplete="off"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          type="submit"
          variant="default"
          size="icon"
          disabled={inputLength === 0}
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}
