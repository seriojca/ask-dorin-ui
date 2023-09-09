import React from "react";
import { clsx } from "clsx";
import { ChatInput } from "@/components/chat-input";
import { useChatStore } from "@/store/useChatStore";

export function Dialog(props) {
  const chat = useChatStore((state) => state.chat);

  return (
    <div className="space-y-4 mb-32 flex flex-col w-full">
      {chat.map((message, index) => (
        <div
          key={index}
          className={clsx(
            "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
            message.sender === "user"
              ? "ml-auto bg-primary text-primary-foreground"
              : "bg-muted",
          )}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}
