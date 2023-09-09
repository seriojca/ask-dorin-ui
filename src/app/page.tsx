"use client";

import { Dialog } from "@/components/Dialog/Dialog";
import { ChatInput } from "@/components/chat-input";
import React from "react";

export default function Home() {
  return (
    <>
      <Dialog />
      <ChatInput />
    </>
  );
}
