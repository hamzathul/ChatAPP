import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation}  = useConversation()

  const fromMe = message.senderId = authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-orange-400': ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-orange-400 ${bubbleBgColor}`}>Hello</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:22
      </div>
    </div>
  );
}

export default Message