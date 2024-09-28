import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

//@ts-ignore
const Conversation = ({ conversation, lastIdx, emoji }) => {
  //@ts-ignore
  const { selectedConversation, setselectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  //@ts-ignore
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-orange-400" : ""}
        `}
        onClick={() => setselectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;

//STARTER CODE
// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://avatar.iran.liara.run/public/boy?username=bobdoe"
//               alt="user avatar"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">John Doe</p>
//             <span className="text-xl">😸</span>
//           </div>
//         </div>
//         <div className="divider my-0 py-0 h-1"></div>
//       </div>
//     </>
//   );
// };

// export default Conversation;
