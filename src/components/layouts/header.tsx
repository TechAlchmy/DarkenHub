import SuloGame from "../../assets/userlayout/sulo_game.png"
import MoneyFeist from "../../assets/userlayout/money_fesit.png"
import SearchIcon from "../../assets/userlayout/search-normal.png"
import Notification from "../../assets/userlayout/notification.png"
import MessageIcon from "../../assets/userlayout/menu_message.png"
import BellIcon from "../../assets/userlayout/bell.png"
import ProfileImgTemp from "../../assets/userlayout/profileImage.png"
import DownIcon from "../../assets/userlayout/down_icon.png"

const DashBoardHearder = () => {

  return (
    <div className="flex flex-row px-12 py-3 items-center justify-between">
      <div className="provider-box flex flex-row justify-between items-center px-16 gap-4">
        <img src={SuloGame} className="h-[40px]" alt="" />
        <img src={MoneyFeist} className="h-[14px]" alt="" />
      </div>
      <div className="text-white text-[14px]">Pages/Dashboard</div>
      <div className="flex flex-row justify-around items-center gap-6">
        <div className="relative">
          <div className="absolute rounded-full bg-[#212325] top-[12px] left-[8px]">
            <img src={SearchIcon} alt="" />
          </div>
          <input 
            className="rounded-full bg-[#151718] min-h-[48px] w-[260px] text-white text-[14px] italic pl-[40px]"
            placeholder="Search your coins..."
          ></input>
        </div>
        <div className="relative">
          <div className="absolute flex flex-row gap-1 items-center top-[16px] left-[8px]">
            <img src={BellIcon} alt="" />
            <span className="text-white text-[16px]">15</span>
          </div>
          <img src={Notification} className="" alt="" />
        </div>
        <div className="relative">
          <div className="absolute flex flex-row gap-1 items-center top-[16px] left-[8px]">
            <img src={MessageIcon} alt="" />
            <span className="text-white text-[16px]">3</span>
          </div>
          <img src={Notification} className="" alt="" />
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
  );
}

export default DashBoardHearder;