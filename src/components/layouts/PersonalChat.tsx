
import { useState, useEffect } from "react";
import io from "socket.io-client";

import { IMessage } from "../../types";

import avatarImg from "../../assets/profile/Avatar Image.png";
import Hexagon from "../../assets/profile/Hexagon.png";
import sendMessageIcon from "../../assets/sendMessageIcon.png"

interface Props {
  chatType: string;
  current: boolean;
  personSte: boolean;
  setPersonState: (data: boolean) => void;
  data: {
    name: string;
    state: boolean;
    level: number;
    exp: number;
  };
}

const socket = io(`${import.meta.env.VITE_APP_LOCAL_URL}`);

const PersonalChat = ({chatType, current, personSte, setPersonState, data}: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  let userID: string | null = localStorage.getItem('userID');
  let userName: string | null = localStorage.getItem('userName');
  let previousUserId: string | null = "";
  let personalChatID: string | null = localStorage.getItem('userID');

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
  return <div className={`w-[300px] fixed z-30 right-0 top-0 bg-slate-800 shadowField transition-width duration-500 ease-in-out ${(!current && personSte == true) ? "translate-x-0" : "translate-x-[300px]"}`} style={{ height: `calc(100vh - 79.5px)` }}>
    <div className="p-[20px] relative border-b-[1px] border-b-[#2f3749]">
      <div className="w-full relative">
        <div className="flex items-center">
          <div className={`size-[40px] relative`}>
            <img src={avatarImg} alt="avatarImg" className="rounded-full" />
            <div className={`absolute top-[0%] left-[0%]`}>
              <div className="relative">
                <svg className="size-full overflow-visible -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="19" fill="none" className="stroke-current text-transparent bg-transparent" strokeWidth="3"></circle>
                  <circle cx="18" cy="18" r="19" fill="none" className="stroke-current text-green-500" strokeWidth="3" strokeDasharray="100" strokeDashoffset={100 - data.exp} strokeLinecap="round"></circle>
                </svg>
                <div className=" absolute size-[20px] bottom-[-5px] right-[-5px]">
                  <img
                    src={Hexagon}
                    alt="profileBg"
                  />
                  <p className="text-white text-center text-[10px] font-bold absolute top-[20%] left-[20%]">{data.level}</p>
                </div>
                <div className={`absolute top-[0px] left-[0px] size-[10px] rounded-full ${data.state ? "bg-green-400" : "bg-gray-400"}`}></div>
              </div>
            </div>
          </div>
          <div className="ml-[20px]">
            <p className="text-white font-medium text-[14px]">{data.name}</p>
            <p className={`text-white text-[10px] mt-[10px] flex justify-center items-center !w-fit rounded-[10px] p-2 ${data.state ? "bg-[#40d04f]" : "bg-[#ff0000]"} w-[10px] h-[10px] rounded-full}`}>{data.state ? `ONLINE` : `OFFLINE`}</p>
          </div>
        </div>
        <div className="text-white absolute top-0 right-0 cursor-pointer" onClick={() => setPersonState(false)}>
          <svg width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
        </div>
      </div>
    </div>
    <div className={`relative p-[30px] bg-[#21283b] overflow-auto w-full`}>
      <div className="flex flex-row gap-4">
        <img src={avatarImg} alt="avatarImg" className="rounded-full size-[35px]" />
        <div>
          <p className="rounded-[10px] rounded-tl-none text-white text-[12px] bg-[#293249] font-medium p-[12px]">{`Hi, How are you?`}</p>
          <p className="mt-[12px] text-[#adafca] text-[12px] font-medium">{`Yesterday at 8:35PM`}</p>
        </div>
      </div>  
      <div className="mt-[16px] pl-[64px] flex items-end flex-col relative">
        <p className="rounded-[10px] rounded-tr-none text-white text-[12px] bg-[#7750f8] font-medium p-[12px]">{`Hi, How are you?`}</p>
        <p className="mt-[10px] rounded-[10px] rounded-tr-none text-white text-[12px] bg-[#7750f8] font-medium p-[12px]">{`You're right, it's been a really long time! I think the last time we saw was at Neko's party`}</p>
      </div>
    </div>
    <div
      className={`bottom-[80px] w-full absolute left-0 px-[28px] py-[22px] bg-[#21283b] rounded-t-[10px] transition-width duration-500 ease-in-out`}
      style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.1)"}}
    >
      <div
        className={`w-full h-[48px] relative text-[14px] font-normal `}
      >
        <input
          type="text"
          className="h-full text-white px-[18px] py-0 pr-[60px] bg-[#1d2333] border border-[#3f485f] focus:border-[#7750f8] rounded-xl transition-all duration-500 ease-in-out"
          placeholder="Write a Messages..." />
        <div className="absolute top-[6px] right-[20px] cursor-pointer">
          <img src={sendMessageIcon} alt="sendMessageIcon" />
        </div>
      </div>
    </div>
  </div>;
};

export default PersonalChat;