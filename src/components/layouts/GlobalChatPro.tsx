import io from "socket.io-client";

import MenuIcon from "../../assets/globalchat/threedots.png";
import ChatLogo from "../../assets/globalchat/chatIcon.png";
import ChatCount from "../../assets/globalchat/chat_count.png";
import smile from "../../assets/globalchat/smile_emoj.png";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../types";
import { useSelector } from "react-redux";

const socket = io('http://localhost:5500');
const GlobalChat = () => {

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const username = useSelector((state: any) => state.auth.name);
  console.log(username);
  useEffect(() => {
    // Receive chat history when connected
    socket.on('chat history', (history: IMessage[]) => {
      setMessages(history);
    });

    // Receive new messages
    socket.on('chat message', (msg: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat history');
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const msg: IMessage = { userId: 'user1', message: newMessage, timestamp: new Date() };
      socket.emit('chat message', msg);
      setNewMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-full h-[340px] bg-global-chat p-5 relative z-10 bg-[#0D0D0D]">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <div>
            <img src={ChatLogo} alt="" />
          </div>
          <p className="text-white text-border1 font-semibold text-[20px] leading-[26px] mt-2 font-crimson">Global Chat</p>
        </div>
        <div>
          <img src={MenuIcon} alt="" />
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <div className="bg-[#FFFFFF1A] w-[180px] h-[1px]"></div>  
        <p className="text-[#FFFFFF66] text-[12px]">
          13:14
        </p>
        <div className="bg-[#FFFFFF1A] w-[180px] h-[1px]"></div>  
      </div>

      <div className="w-full h-[1px] bg-[#FFFFFF33] -mt-2"></div>
      <div className="h-[180px] py-5 overflow-y-scroll  gc_scroll flex flex-col gap-5">
        {messages.map((message) => (
          <div className="flex gap-2" key={message.message + message.userId}>
            <div className="w-[30px] h-[30px]">
              <img src={ChatLogo} alt="" />
            </div>
            <div className="bg-[#FFFFFF33] p-[10px] rounded-md text-white">
              {message.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="relative">
        <input 
          type="text" 
          className="custom_input p-6 pr-[122px]! text-[16px] rounded border outline-none border-none" 
          placeholder="Typing here" 
          name="" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-3 top-0 flex gap-2 items-center custom">
            <div>
              <img src={ChatCount} className="w-10 h-10 mt-2" alt="" />
            </div>
            <div>
              <img src={smile} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalChat;