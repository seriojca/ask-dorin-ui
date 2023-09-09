import { create } from "zustand";

export const useChatStore = create<any>((set, get) => ({
	chat: [],
	addMessage: (chat) => set((state) => ({ chat: [...state.chat, chat] })),
	clearChat: () => set({ chat: [] }),
	editMessage: (id: string, content: string) => {
		const chats = get().chat;
		const chat = chats.find((e) => e.id === id);
		chat.content = content;
		set({ chat: [...chats] });
	},
}));
