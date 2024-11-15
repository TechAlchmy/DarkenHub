import { useState, useEffect } from "react";
import io from "socket.io-client";

import { IMessage } from "../../types";

import avatarImg from "../../assets/profile/Avatar Image.png";
import sendMessageIcon from "../../assets/sendMessageIcon.png"
import { message } from "antd";
import * as dotenv from 'dotenv';
dotenv.config();
interface Props {
  chatType: string;
}
const socket = io(`${process.env.VITE_APP_LOCAL_URL}`);

const GlobalChatField = ({chatType}: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  let userID: string | null = localStorage.getItem('userID');
  let userName: string | null = localStorage.getItem('userName');
  let previousUserId: string | null = "";

  useEffect(() => {
    // Join the specified room
    socket.emit("chatType", chatType);

    // Receive new messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Receive chat history for the room
    socket.on("chat history", (history) => {
      setMessages(history);
    });

    return () => {
      socket.off('chat history');
      socket.off('chat message');
    };
  }, [chatType, messages]);

  const sendMessage = () => {
    if(newMessage !== ""){
      if (newMessage.trim()) {
        const msg: IMessage = {
          chatType: "Global",
          userId: userID,
          userName: userName,
          message: newMessage,
          timestamp: new Date()
        };
        socket.emit('send message', msg);
        setNewMessage('');
      }
    }
  };
  const sendMessageEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="h-full relative overflow-y-scroll">
      <div className={`p-[30px] bg-[#21283b] overflow-auto w-full`}>
        {messages.map((message, index) => {
          const isSameUser = previousUserId === message.userId;
          previousUserId = message.userId; // Update local variable
          // Convert timestamp to Date object if it's not already
          const date = new Date(message.timestamp);

          // Extract year, month, day, hours, and minutes
          const year = date.getFullYear();
          const month = date.getMonth() + 1; // Months are zero-indexed
          const day = date.getDate();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          
          // Format hours and minutes to be two digits
          const formattedHours = hours < 10 ? '0' + hours : hours;
          const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

          // Create the formatted date-time string
          const formattedDateTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${formattedHours}:${formattedMinutes}`;
          
          return message.userId !== userID ? (
            <div key={index} className="flex flex-row gap-4 mt-[10px]">
              {!isSameUser && (
                <img src={avatarImg} className="rounded-full size-[35px]" />
              )}
              {isSameUser && (
                <div className="size-[35px]"></div>
              )}
              <div className="h-full">
                <p className="rounded-[10px] rounded-tl-none text-white text-[12px] bg-[#293249] font-medium p-[12px]">{message.message}</p>
                <p className="mt-[12px] text-[#adafca] text-[12px] font-medium">{formattedDateTime}</p>
              </div>
            </div>
          ) : (
            <div key={index} className="mt-[16px] pl-[64px] flex items-end flex-col relative">
              <p className="rounded-[10px] rounded-tr-none text-white text-[12px] bg-[#7750f8] font-medium p-[12px]">{message.message}</p>
            </div>
          );
        })}
      </div>
      <div className="fixed left-[10%] !bottom-0">
        <div className={`w-full h-[48px] relative text-[14px] font-normal `}>
          <input
            type="text"
            className="h-full text-white px-[18px] py-0 pr-[60px] bg-[#1d2333] border border-[#3f485f] focus:border-[#7750f8] rounded-xl transition-all duration-500 ease-in-out"
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={sendMessageEvent}
            placeholder="Write a Messages..." />
          <div className="absolute bottom-[6px] right-[20px]">
            <img src={sendMessageIcon} alt="sendMessageIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default GlobalChatField;