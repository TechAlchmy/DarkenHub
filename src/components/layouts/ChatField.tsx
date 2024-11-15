import { useState } from "react";

import ChatItem from "./ChatItem";
import PersonalChat from "./PersonalChat";
import GlobalChatField from "./GlobalChatField";

import searchMessageIcon from "../../assets/searchIcon.png"
import "./chatField.css"
interface Props {
  setState: (data: boolean) => void;
  currentState: boolean;
}

const ChatField = ({setState, currentState}: Props) => {
  const [personalMg, setPersonMg] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // Handler to update the state when the toggle is changed
  const handleToggleChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className={`w-[300px] fixed right-0 top-[79.5px] bg-slate-800 z-50 shadowField transition-width duration-500 ease-in-out ${!currentState ? "translate-x-0" : "translate-x-[225px]"}`} style={{ height: `calc(100vh - 79.5px)` }}>
      <div className="chatList">
        <div className={`relative w-full h-[767px] overflow-y-hidden flex-wrap`}>
          <ChatItem
            name={`Nick Grissom`}
            lastChat={`Can you stream the new game?`}
            time={1}
            exp={67}
            level={24}
            online={true}
            current={personalMg}
            personMsg={setPersonMg}
          />
        </div>
        <div
          className={`bottom-[80px] w-full absolute left-0 px-[28px] py-[22px] bg-[#21283b] rounded-t-[10px] transition-width duration-500 ease-in-out ${!currentState ? "translate-y-0" : "translate-y-[92px]"}`}
          style={{ boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.1)"}}
        >
          <div
            className={`w-full h-[48px] relative flex items-center justify-between gap-3 text-[14px] font-normal `}
          >
            <input
              type="text"
              className="h-full text-white px-[18px] py-0 pr-[30px] bg-[#1d2333] border border-[#3f485f] focus:border-[#7750f8] rounded-xl transition-all duration-500 ease-in-out"
              placeholder="Search Messages..." />
            <div className="absolute size-[30px] top-[10px] right-[45px] cursor-pointer">
              <img src={searchMessageIcon} alt="searchMessageIcon" />
            </div>
            <div className="flex">
              <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isChecked} // Bind the checked state
                  onChange={handleToggleChange} />
              <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
          </div>
        </div>
      </div>
      <div className={`globalChat w-full absolute top-0 transition-all duration-500 ease-in-out pb-[30px]  ${isChecked ? "translate-x-0" : "translate-x-[300px]"}`} style={{ height: `calc(100% - 173px)` }}>
        <GlobalChatField chatType="Global" />
      </div>
      <div className="personalChat">
        <PersonalChat
          chatType={"Personal"}
          data={{
            name: `Nick Grissom`,
            state: true,
            level: 24,
            exp: 67,
          }}
          current={currentState}
          personSte={personalMg}
          setPersonState={setPersonMg}
        />
      </div>
      <div 
        className={`absolute z-50 bottom-0 left-0 w-full flex items-center h-[80px] pl-[28px] bg-[#40d04f] cursor-pointer`}
        onClick={() => {
          setState(!currentState);
          setPersonMg(false);
          setIsChecked(false);
        }}
      >
        <div className={`mr-[30px]`}>
          <div className={`w-[20px] h-[14px] relative`}>
            <div className={`absolute h-[2px] bg-white right-0 transition-width duration-500 ease-in-out ${currentState ? "minChat" : "expandChat"}`}></div>
            <div className={`absolute h-[2px] bg-white right-0 transition-width duration-500 ease-in-out ${currentState ? "minChat" : "expandChat"}`}></div>
            <div className={`absolute h-[2px] bg-white right-0 transition-width duration-500 ease-in-out ${currentState ? "minChat" : "expandChat"}`}></div>
          </div>
        </div>
        <p className={`text-white text-[15px] tracking-wide whitespace-nowrap font-bold transition-width duration-500 ease-in-out ${currentState ? "translate-x-[10px]" : "translate-x-0"}`}>Messages/Chat</p>
      </div>
    </div>
  )
}

export default ChatField;