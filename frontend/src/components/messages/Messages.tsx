import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  const endOfMessagesRef = useRef(null);
  useEffect(() => {
    if (endOfMessagesRef.current) {
      //@ts-ignore
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          <Message key={message._id} message={message} />
        ))}
      {loading &&
        [...Array(3)].map((_, idx) => (
          <MessageSkeleton key={idx}></MessageSkeleton>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Yay! Send a message to connect...</p>
      )}
      <div ref={endOfMessagesRef} /> {/* Empty div to scroll to */}
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
