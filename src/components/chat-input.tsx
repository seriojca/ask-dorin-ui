"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/button";
import { Check, Plus, Send } from "lucide-react";
import { Input } from "@/components/Input/Input";
import { useChatStore } from "@/store/useChatStore";
import { uuid } from "uuidv4";
import axios from "axios";

interface blankNewMessage {
	id: string;
	content: string;
	role: string;
	timestamp: string;
}

export function clearTouch() {
	dontTouch = undefined;
}
let dontTouch;

export function ChatInput() {
	const [input, setInput] = React.useState("");
	const [currentMessage, setCurrentMessage] = React.useState("");
	const inputLength = input.length;
	const addMessage = useChatStore((state) => state.addMessage);
	const messages = useChatStore((state) => state.chat);
	const editMessage = useChatStore((state) => state.editMessage);

	const uid = "5493";
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	const handleSubmit = async () => {
		if (inputLength === 0) return;
		const newMessage: blankNewMessage = {
			id: uuid(),
			content: input,
			role: "user",
			timestamp: new Date().toISOString(),
		};
		addMessage(newMessage);

		setInput("");

		let response = await fetch(
			`https://evo-bot-6q2kw2pjyq-ey.a.run.app/ask`,
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					data: dontTouch,
					conversations: [
						...messages.map(({ role, content }) => ({
							role,
							content,
						})),

						{
							role: "user",
							content: input,
						},
					],
				}),
			}
		);
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let result = await reader.read();
		setCurrentMessage("");
		const chatAssistentId = uuid();
		addMessage({
			id: chatAssistentId,
			content: "THIS_IS_SPINNER_TEST",
			role: "assistant",
			timestamp: new Date().toISOString(),
		});
		let string = "";
		let removedNl = false;
		while (!result.done) {
			const text = decoder.decode(result.value);
			result = await reader.read();
			string += text;
			if (!removedNl && string.includes("\n")) {
				removedNl = true;
				dontTouch = JSON.parse(
					string.slice(0, string.indexOf("\n"))
				).data;
				string = string.slice(string.indexOf("\n") + 1, string.length);
			}

			editMessage(chatAssistentId, string);
		}

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
