import globalChatIcon from "../assets/globalchat/chatIcon.png"
import threeDots from "../assets/globalchat/threedots.png"
import divideLine from "../assets/globalchat/Spacer.png"
import smileEmoj from "../assets/globalchat/smile_emoj.png"
import scoreBoard from "../assets/globalchat/chat_count.png"
import smallChatIcon from "../assets/globalchat/smallChatIcon.png"
// import { useEffect, useRef, useState } from "react"
import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io(`${import.meta.env.VITE_APP_LOCAL_URL}`);

interface ChatMessage {
  sender: string;
  message: string;
  timestamp: Date;
}

const GlobalChat = () => {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [letterCount, setLetterCount] = useState(241);

  // const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (chatRef.current) {
    //   chatRef.current.scrollTop = chatRef.current.scrollHeight;
    // }
  }, [messages]);

  useEffect(() => {
    socket.on('chatHistory', (chatHistory) => {
      setMessages(chatHistory);
    });

    // Listen for new messages
    socket.on('chatMessage', (message: ChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('chatHistory');
      socket.off('chatMessage');
    };
  }, [])

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chatMessage', message);
      setMessage("");
    }
  }
  const handleKeyPress = (event: any) => {
    if (event.key == 'Enter') {
      sendMessage();
      setLetterCount(0);
    }
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={globalChatIcon} />
          <span className="text-white text-[13px] font-bold">Global Chat</span>
        </div>
        <img src={threeDots} className="cursor-pointer"/>
      </div>
      <div className="mt-4 mb-1">
        <img src={divideLine} className="w-full" />
      </div>
      {/* <div ref={chatRef} className="chat_area min-h-[300px] max-h-[300px] border border-[1px] border-slate-500 rounded px-3 py-2 overflow-auto custom-chat-scrollbar"> */}
      <div className="chat_area min-h-[300px] max-h-[300px] border-[1px] border-slate-500 rounded px-3 py-2 overflow-auto custom-chat-scrollbar">
      {
        messages.map((item, index) => {
          return <>
            <div key={index} className="flex flex-row gap-2 items-end">
              <img src={smallChatIcon} />
              <div className="mt-2 bg-zinc-800 rounded-md px-2 py-2 text-white text-[13px]">{item.message}</div>
            </div>
          </>
        })
      }
      </div>
      <div className="mt-2">
        <div className="relative">
          <div className="absolute flex flex-row gap-5 items-center right-[20px] top-[8px]">
            <div className="relative">
              <img src={scoreBoard} ></img>
              <div className="text-white text-[13px] absolute top-[12px] left-[11px]">{letterCount}</div>
            </div>
            <img src={smileEmoj}></img>
          </div>
          <input 
            className="w-full rounded bg-transparent min-h-[60px] text-white text-[14px] py-2 pl-4 pr-[112px] border-slate-500 border-[1px] tracking-wider italic"
            type="text"
            value={message}
            onChange={(e) => { setMessage(e.target.value), setLetterCount(241 - e.target.value.length) }}
            onKeyPress={handleKeyPress}
            placeholder="Start typing..."
          ></input>
        </div>
      </div>
    </>
  )
}

export default GlobalChat;