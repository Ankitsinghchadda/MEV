'use client'
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { RiSendPlane2Fill } from "react-icons/ri";

interface ChatMessage {
  text: string;
  type: 'user' | 'bot';
}

interface ChatAreaProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatTextArea: React.FC<ChatAreaProps> = ({ isOpen, onClose }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  useEffect(() => {
    // Fetch chat messages or initialize the chat here using your API
    // For example:
    // fetchChatMessages().then((messages) => setChatMessages(messages));
  }, []);

  const handleSendMessage = () => {
    // Implement sending messages using your API
    // For example:
    // sendMessageToApi(inputMessage).then(() => {
    //   setChatMessages([...chatMessages, { text: inputMessage, type: 'user' }]);
    //   setInputMessage('');
    // });
  };

  return (
    <div className={`fixed bottom-24 right-12 bg-[#1f1f1f] border border-neutral-700 rounded-2xl ${isOpen ? 'w-[440px] h-[540px]' : 'w-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className='relative h-full'>
            <div className="flex justify-between items-center py-2">
                <p className="text-xl pl-4 text-neutral-300">Hello! How I can help you today?</p>
                <button className="p-4 text-neutral-300" onClick={onClose}>
                    <IoClose size={28} />
                </button>
            </div>
            <div className="h-[calc(100%-150px)] w-full overflow-y-auto bg-[#1f1f1f] flex flex-col-reverse gap-2 p-4 items-end">
                {/* Display chat messages here */}
                <div className='w-full flex'>
                    <div className='p-2 max-w-[80%] bg-neutral-600 h-auto rounded-lg text-white'>
                        <p className='overflow-wrap break-words'>asdfadfadfasdfas</p>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-[80%] p-2 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 h-auto rounded-lg text-white'>
                        <p className='overflow-wrap break-words'>asdfasdfadfad adfasdf adfadfa asdfasdf</p>
                    </div>
                </div>
                <div className='w-full flex'>
                    <div className='p-2 max-w-[80%] bg-neutral-600 h-auto rounded-lg text-white'>
                        <p className='overflow-wrap break-words'>asdfadfadfasdfas</p>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-[80%] p-2 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 h-auto rounded-md text-white'>
                        <p className='overflow-wrap break-words'>asdfasdfadfad adfasdf adfadfa asdfasdf</p>
                    </div>
                </div>
                
                <div className='w-full flex'>
                    <div className='p-2 max-w-[80%] bg-neutral-600 h-auto rounded-lg text-white'>
                        <p className='overflow-wrap break-words'>asdfadfadfasdfas</p>
                    </div>
                </div>
                {/* {chatMessages.map((message, index) => (
                <div key={index} className={`p-2 ${message.type === 'bot' ? 'text-green-600' : 'text-blue-600'}`}>
                    {message.text}
                </div>
                ))} */}
            </div>
            <div className="flex absolute bottom-0 w-full border-t p-2 bg-[#1f1f1f] border-neutral-700">
                <input
                type="text"
                placeholder="Ask me anything..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow px-4 py-2 bg-[#2b2b2b] rounded-xl outline-none text-white"
                />
                <button
                onClick={handleSendMessage}
                className="p-[12px] ml-2 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300  text-white rounded-md"
                >
                    <RiSendPlane2Fill size={28}/>
                </button>
            </div>
        </div>
    </div>
  );
};

export default ChatTextArea;