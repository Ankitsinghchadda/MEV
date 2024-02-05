import React from 'react'
import { SiChatbot } from "react-icons/si";
import { IoIosCloseCircle } from "react-icons/io";
import Image from 'next/image';

type ChatButtonProps = {
    onClick: () => void,
    isOpen: boolean
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-sky-500 to-blue-400 text-white rounded-full shadow-md"
        onClick={onClick}
    >
        {isOpen ? <IoIosCloseCircle size={32} /> : <Image height="32" width="32" src="/images/chatbot.png" alt='chatbot' /> }
    </button>
  )
}

export default ChatButton