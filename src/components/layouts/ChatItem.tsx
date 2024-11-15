import { useState } from "react";

import avatarImg from "../../assets/profile/Avatar Image.png";
import Hexagon from "../../assets/profile/Hexagon.png";


interface Props {
  name: string;
  lastChat: string;
  time: number;
  exp: number;
  level: number;
  online: boolean;
  current: boolean;
  personMsg: (data: boolean) => void;
}
const ChatItem = ({name, lastChat, time, exp, level, online, current, personMsg}: Props) => {
  return (
    <div className={`p-[14px] cursor-pointer transition-all duration-500 ease-in-out`} onClick={()=> personMsg(!current)}>
      <div className={`min-h-[44px] pt-[2px] pl-[65px] relative`}>
        <div className={`absolute top-0 left-0`}>
          <div className={`w-[40px] h-[44px]`}>
            <div className={`absolute top-[6px] left-[5px]`}>
              <div className={`size-[40px] relative`}>
                <img src={avatarImg} alt="avatarImg" className="rounded-full" />
                <div className={`absolute top-[0%] left-[0%]`}>
                  <div className="relative">
                    <svg className="size-full overflow-visible -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="19" fill="none" className="stroke-current text-transparent bg-transparent" strokeWidth="3"></circle>
                      <circle cx="18" cy="18" r="19" fill="none" className="stroke-current text-green-500" strokeWidth="3" strokeDasharray="100" strokeDashoffset={100 - exp} strokeLinecap="round"></circle>
                    </svg>
                    <div className=" absolute size-[20px] bottom-[-5px] right-[-5px]">
                      <img
                        src={Hexagon}
                        alt="profileBg"
                      />
                      <p className="text-white text-center text-[10px] font-bold absolute top-[20%] left-[20%]">{level}</p>
                    </div>
                    <div className={`absolute top-[0px] left-[0px] size-[10px] rounded-full ${online ? "bg-green-400" : "bg-gray-400"}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={`text-white font-medium text-[14px] mt-[5px]`}>{name}</p>
        <p className="text-[12px] text-[#9aa4bf] mt-[5px]">{lastChat}</p>
        <p className="absolute top-[8px] right-0 text-[#9aa4bf] text-[12px] font-medium">{time}hrs</p>
      </div>
    </div>
  )
}

export default ChatItem;