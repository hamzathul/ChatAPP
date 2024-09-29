import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  //@ts-ignore
  const { socket } = useSocketContext();
  //@ts-ignore
  const { setMessages, messages } = useConversation();

  useEffect(() => {
    if (!socket) {
      console.log("Socket is not initialized");
      return;
    }

    const handleNewMessage = (newMessage: any) => {
      
      setMessages([...messages, newMessage]);
      console.log("Received new message:", newMessage);
    };

    // Listen for the new message event
    socket.on("newMessage", handleNewMessage);

    // Cleanup function to remove the listener
    return () => {
      socket.off("newMessage", handleNewMessage);
      console.log("Cleanup: removed newMessage listener");
    };
  }, [socket, setMessages, messages]); 
};

export default useListenMessages;
