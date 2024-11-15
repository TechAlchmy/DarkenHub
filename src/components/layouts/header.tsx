import GridIcon from "../common/headerGridIcon"

import SuloGame from "../../assets/userlayout/sulo_game.png"
import MoneyFeist from "../../assets/userlayout/money_fesit.png"
import SearchIcon from "../../assets/userlayout/search-normal.png"
import MessageIcon from "../../assets/Message.png"
import BellIcon from "../../assets/Bell.png"
import ProfileImgTemp from "../../assets/userlayout/profileImage.png"
import DownIcon from "../../assets/userlayout/down_icon.png"

interface DashBoardHeaderProps {
  setState: (data: boolean) => void;
  currentState: boolean; // Add currentData prop to get the current state
}

const DashBoardHearder = ({setState, currentState} : DashBoardHeaderProps ) => {
  const handleChange = () => {
    setState(!currentState);
  };

  return (
    <div className={`fixed top-0 w-screen z-[1000] ease-in-out duration-500 bg-black`} style={{ width: `calc(100vw - ${currentState ? "250px" : "120px"})` }}>
      <div className="flex flex-row px-12 py-3 items-center justify-between">
        <div onClick={handleChange} >
          <GridIcon width="20" height="20" fill="white"/>
        </div>
        <div className="provider-box flex flex-row justify-between items-center px-16 gap-4">
          <img src={SuloGame} className="h-[40px]" alt="" />
          <img src={MoneyFeist} className="h-[14px]" alt="" />
        </div>
        <div className="text-white text-[14px]">Pages/Dashboard</div>
        <div className="w-[110px]">
          <p className="flex justify-between text-white text-[12px] uppercase font-bold">
            Next:
            <span>38
              <span className="ml-[3px]">exp</span>
            </span>
          </p>
          <div className="relative h-[4px] mt-2">
            <canvas width="110" height="4" className="absolute top-0 left-0 bg-[#212529]"></canvas>
            <canvas width="60" height="4" className="absolute top-0 left-0 bg-[#28a745]"></canvas>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center gap-6">
          <div className="relative">
            <div className="absolute rounded-full bg-[#212325] top-[12px] left-[-35px]">
              <img src={SearchIcon} alt="" />
            </div>
            <input 
              className="rounded-full bg-[#151718] min-h-[48px] w-[260px] text-white text-[14px] italic pl-[40px]"
              placeholder="Search your coins..."
            ></input>
          </div>
          <div className="relative size-[50px]">
            <div className="absolute flex flex-row gap-1 items-center top-[8px] left-[8px]">
              <img src={MessageIcon} alt="MessageIcon" />
            </div>
            <div className={`absolute size-[10px] rounded-full bg-[#28a745] top-[10px] right-[0px]`}></div>
          </div>
          <div className="relative size-[50px]">
            <div className="absolute flex flex-row gap-1 items-center top-[8px] left-[8px]">
              <img src={BellIcon} alt="MessageIcon" />
            </div>
            <div className={`absolute size-[10px] rounded-full bg-[#28a745] top-[10px] right-[0px]`}></div>
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <img src={ProfileImgTemp} alt="" />
            <div className="flex flex-row items-center gap-2">
              <span className="text-white text-[14px]">Eric</span>
              <img src={DownIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHearder;