import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  //@ts-ignore
  setselectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  //@ts-ignore
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;


// like AuthContext that we have created