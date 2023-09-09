import Chat from "@/components/chat";
import { ChatInput } from "@/components/chat-input";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Chat />
      <ChatInput />
    </React.Fragment>
  );
}
