"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/button";
import { Check, Plus, Send } from "lucide-react";
import { Input } from "@/components/Input/Input";
import { useChatStore } from "@/store/useChatStore";
import { uuid } from "uuidv4";

interface blankNewMessage {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

export function ChatInput() {
  const [input, setInput] = React.useState("");
  const inputLength = input.length;
  const addMessage = useChatStore((state) => state.addMessage);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputLength === 0) return;

    const newMessage: blankNewMessage = {
      id: uuid(),
      content: input,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    addMessage(newMessage);

    document.getElementById("last_message_anchor").scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

    setInput("");
  };

  return (
    <div
      className={
        "absolute border-t h-32 bottom-0 w-full flex items-center justify-center backdrop-blur-xl mr-4"
      }
    >
      <div className="w-[80%] max-w-[860px] flex items-center gap-4">
        <Input
          id="message"
          placeholder="Type your message..."
          className="flex-1"
          autoComplete="off"
          onKeyDown={(event) => handleKeyDown(event)}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          type="submit"
          onClick={() => handleSubmit()}
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
