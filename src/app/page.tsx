"use client";

import { Dialog } from "@/components/Dialog/Dialog";
import { ChatInput } from "@/components/chat-input";
import React from "react";
import { Sheet } from "@/components/Sheet/Sheet";

export default function Home() {
  return (
    <>
      <Sheet />
      <Dialog />
      <ChatInput />
    </>
  );
}
