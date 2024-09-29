import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(()=>{
      //@ts-ignore
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100)
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          //@ts-ignore
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, idx) => (
          <MessageSkeleton key={idx}></MessageSkeleton>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Yay! Send a message to connect...</p>
      )}
    </div>
  );
};

export default Messages;

//STARTER CODE
// import React from "react";
// import Message from "./Message";
// import useGetMessages from "../../hooks/useGetMessages";

// const Messages = () => {
//   const { messages, loading } = useGetMessages();
//   console.log("messages:", messages);
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default Messages;
