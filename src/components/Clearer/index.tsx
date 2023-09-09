"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Theme } from "@/types/global";
import { Button } from "@/components/button";
import { Trash } from "react-feather";
import { useChatStore } from "@/store/useChatStore";
import { clearTouch } from "../chat-input";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const store = useChatStore()!;

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				store.clearChat();
				clearTouch();
			}}
		>
			<Trash />
		</Button>
	);
}
