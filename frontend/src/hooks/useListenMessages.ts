import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  //@ts-ignore
  const { socket } = useSocketContext();
  //@ts-ignore
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    //@ts-ignore
    socket?.on("newMesage", (newMessage) => {
      
      setMessages([...messages, newMessage]);
      console.log(messages)

      return () => socket?.off("newMessage");
    });
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
