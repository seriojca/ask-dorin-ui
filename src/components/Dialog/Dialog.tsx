import React, { useEffect } from "react";
import { clsx } from "clsx";
import { ChatInput } from "@/components/chat-input";
import { useChatStore } from "@/store/useChatStore";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ReactLoading from "react-loading";

export function Dialog(props) {
	const chat = useChatStore((state) => state.chat);

	useEffect(() => {
		document.getElementById("last_message_anchor").scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	}, [chat]);

	return (
		<div className={"w-[90%] max-w-[824px]"}>
			<div className="space-y-4 flex flex-col w-full py-4">
				{chat.map((message, index) => (
					<div
						id={message.id}
						key={index}
						className={clsx(
							"flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
							message.role === "user"
								? "ml-auto bg-primary !text-primary-foreground"
								: "bg-muted"
						)}
					>
						{message.content === "THIS_IS_SPINNER_TEST" ? (
							<ReactLoading
								type={"bubbles"}
								color={"gray"}
								height={32}
								width={32}
							/>
						) : (
							<ReactMarkdown
								className={clsx(
									message.role !== "user" && "prose"
								)}
								remarkPlugins={[remarkGfm]}
							>
								{message.content}
							</ReactMarkdown>
						)}
					</div>
				))}
				<div id={"last_message_anchor"} className={"h-48"}></div>
			</div>
		</div>
	);
}
