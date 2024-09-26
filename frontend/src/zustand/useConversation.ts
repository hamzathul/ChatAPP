import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (selectedConversation: any) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: any) => set({ messages }),
}));

export default useConversation;


// like AuthContext that we have created