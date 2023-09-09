import React from "react";
import { clsx } from "clsx";
import { ChatInput } from "@/components/chat-input";

const mockMessages = [
  {
    id: "1",
    content: "Hello",
    sender: "user",
    timestamp: "2021-10-10T12:00:00.000Z",
  },
  {
    id: "2",
    content: "Hi",
    sender: "bot",
    timestamp: "2021-10-10T12:01:00.000Z",
  },
  {
    id: "3",
    content: "How are you?",
    sender: "user",
    timestamp: "2021-10-10T12:02:00.000Z",
  },
  {
    id: "4",
    content: "I'm good, thanks! How about you?",
    sender: "bot",
    timestamp: "2021-10-10T12:03:00.000Z",
  },
  {
    id: "5",
    content: "I'm doing well too, thanks!",
    sender: "user",
    timestamp: "2021-10-10T12:04:00.000Z",
  },
  {
    id: "6",
    content: "That's great to hear!",
    sender: "bot",
    timestamp: "2021-10-10T12:05:00.000Z",
  },
  {
    id: "7",
    content: "What have you been up to today?",
    sender: "user",
    timestamp: "2021-10-10T12:06:00.000Z",
  },
  {
    id: "8",
    content: "Just some routine tasks. How about you?",
    sender: "bot",
    timestamp: "2021-10-10T12:07:00.000Z",
  },
  {
    id: "9",
    content: "I had a busy day at work.",
    sender: "user",
    timestamp: "2021-10-10T12:08:00.000Z",
  },
  {
    id: "10",
    content: "I hope it went well!",
    sender: "bot",
    timestamp: "2021-10-10T12:09:00.000Z",
  },
  {
    id: "11",
    content: "Yes, it did. Thanks for asking!",
    sender: "user",
    timestamp: "2021-10-10T12:10:00.000Z",
  },
  {
    id: "12",
    content: "That's great to hear!",
    sender: "bot",
    timestamp: "2021-10-10T12:11:00.000Z",
  },
  {
    id: "13",
    content: "What are your plans for the evening?",
    sender: "user",
    timestamp: "2021-10-10T12:12:00.000Z",
  },
  {
    id: "14",
    content: "I'll be here, ready to chat with you!",
    sender: "bot",
    timestamp: "2021-10-10T12:13:00.000Z",
  },
  {
    id: "15",
    content: "That sounds nice!",
    sender: "user",
    timestamp: "2021-10-10T12:14:00.000Z",
  },
  {
    id: "16",
    content: "Do you have any plans?",
    sender: "user",
    timestamp: "2021-10-10T12:15:00.000Z",
  },
  {
    id: "17",
    content: "I'm here to assist you, so no plans for me!",
    sender: "bot",
    timestamp: "2021-10-10T12:16:00.000Z",
  },
  {
    id: "18",
    content: "Thanks for always being available!",
    sender: "user",
    timestamp: "2021-10-10T12:17:00.000Z",
  },
  {
    id: "19",
    content: "You're welcome! It's my pleasure to help.",
    sender: "bot",
    timestamp: "2021-10-10T12:18:00.000Z",
  },
  {
    id: "20",
    content: "I appreciate that!",
    sender: "user",
    timestamp: "2021-10-10T12:19:00.000Z",
  },
  {
    id: "21",
    content: "Is there anything specific you'd like to talk about?",
    sender: "bot",
    timestamp: "2021-10-10T12:20:00.000Z",
  },
  {
    id: "22",
    content: "Not really, just wanted to chat.",
    sender: "user",
    timestamp: "2021-10-10T12:21:00.000Z",
  },
  {
    id: "23",
    content: "That's perfectly fine! I'm here for casual conversations too.",
    sender: "bot",
    timestamp: "2021-10-10T12:22:00.000Z",
  },
  {
    id: "24",
    content: "Great! So, what's new with you?",
    sender: "user",
    timestamp: "2021-10-10T12:23:00.000Z",
  },
  {
    id: "25",
    content: "Not much, just chatting with you right now!",
    sender: "bot",
    timestamp: "2021-10-10T12:24:00.000Z",
  },
  {
    id: "26",
    content: "Haha, fair enough!",
    sender: "user",
    timestamp: "2021-10-10T12:25:00.000Z",
  },
  {
    id: "27",
    content: "Is there anything else on your mind?",
    sender: "bot",
    timestamp: "2021-10-10T12:26:00.000Z",
  },
  {
    id: "28",
    content: "Not right now, but I'll reach out if I have any questions.",
    sender: "user",
    timestamp: "2021-10-10T12:27:00.000Z",
  },
  {
    id: "29",
    content: "Sounds good! Have a wonderful day!",
    sender: "bot",
    timestamp: "2021-10-10T12:28:00.000Z",
  },
  {
    id: "30",
    content: "You too! Take care!",
    sender: "user",
    timestamp: "2021-10-10T12:29:00.000Z",
  },
];

export function Dialog(props) {
  return (
    <div className="space-y-4 mb-32 flex flex-col w-full">
      {mockMessages.map((message, index) => (
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
