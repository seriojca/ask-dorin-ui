"use client";
import { ChatInput } from "@/components/chat-input";
import { Dialog } from "@/components/Dialog/Dialog";
import React, { useRef } from "react";

export interface ChatProps extends React.ComponentProps<"div"> {}

export default function Chat({ className }: ChatProps) {
  const divRef = useRef(null);

  return (
    <React.Fragment>
      {/* Side panel  */}
      {/*<div></div>*/}
      {/* Dialog box */}
      <div ref={divRef}>
        <Dialog />
      </div>
    </React.Fragment>
  );
}
