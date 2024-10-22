import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Dashlogo from "../assets/dashboard/Vector.png"
import Minprice from "../assets/dashboard/min_price.png"
import Addsymbol from "../assets/dashboard/add.png"
import DashboardMenu from "../components/common/DashboardMenu"
import DashboardImg from "../assets/dashboard/dashboard.png"
import Trading from "../assets/dashboard/trading.png"
import Watchlist from "../assets/dashboard/watchlist.png"
import Academy from "../assets/dashboard/academy.png"
import Profile from "../assets/dashboard/profile.png"
import Wallet from "../assets/dashboard/wallet.png"
import Logout from "../assets/dashboard/logout.png"
import SuloGame from "../assets/userlayout/sulo_game.png"
import MoneyFeist from "../assets/userlayout/money_fesit.png"
import SearchIcon from "../assets/userlayout/search-normal.png"
import Notification from "../assets/userlayout/notification.png"
import MessageIcon from "../assets/userlayout/menu_message.png"
import BellIcon from "../assets/userlayout/bell.png"
import ProfileImgTemp from "../assets/userlayout/profileImage.png"
import DownIcon from "../assets/userlayout/down_icon.png"

const UserLayout = () => {

  const navigate = useNavigate();
  const menus = [
    {
      short: "dashboard",
      source: DashboardImg,
      name: "Dashboard",
    },
    {
      short: "portfolio",
      source: DashboardImg,
      name: "Portfolio",
    },
    {
      short: "trading",
      source: Trading,
      name: "Trading",
    },
    {
      short: "watchlist",
      source: Watchlist,
      name: "Watchlist",
    },
    {
      short: "academy",
      source: Academy,
      name: "Academy",
    },
    {
      short: "profile",
      source: Profile,
      name: "Profile",
    },
    {
      short: "wallet",
      source: Wallet,
      name: "Wallet",
    },
  ]
  
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
  })

  const onLogOut = (e: any) => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  }

  return (
    <>
    <div className="flex flex-row relative">
      <div className="w-1/6 min-h-screen fixed bg-[#151617] px-6 py-6">
        <div className="flex flex-row items-center">
          <img src={Dashlogo}></img>
          <span className="text-white text-[24px]">arkenhub</span>
        </div>
        <div className="flex flex-row items-center gap-2 pl-8 mt-8">
          <img className="cursor-pointer" src={Minprice}></img>
          <span className="text-white text-[16px]">-$234.80</span>
          <div className="w-[30px] h-[30px] rounded-full border-2 border-[#212325] relative cursor-pointer">
            <img src={Addsymbol} className="absolute pl-[1px] pt-[1px]"></img>
          </div>
        </div>
        {
          menus.map((key, index) => {
            return <DashboardMenu short={menus[index].short} source={menus[index].source} name={menus[index].name} />
          })
        }
        <div className="mt-48">
          <div 
            className="mt-4 min-h-[48px] px-8 py-2 flex flex-row items-center gap-3 text-white text-[14px] cursor-pointer"
            onClick={onLogOut}
          >
            <img className="w-[22px] h-[22px]" src={Logout}></img>
            <span className="">LogOut</span>
          </div>
          <div className="mt-4 px-8">
            <span className="text-white text-[14px]">English</span>
          </div>
        </div>
      </div>
      <div className="w-5/6 min-h-screen absolute right-0 bg-[#1E1E1E]">
        <div className="flex flex-row px-12 py-3 items-center justify-between">
          <div className="provider-box flex flex-row justify-between items-center px-16 gap-4">
            <img src={SuloGame} className="h-[40px]"></img>
            <img src={MoneyFeist} className="h-[14px]"></img>
          </div>
          <div className="text-white text-[14px]">Pages/Dashboard</div>
          <div className="flex flex-row justify-around items-center gap-6">
            <div className="relative">
              <div className="absolute rounded-full bg-[#212325] top-[12px] left-[8px]">
                <img src={SearchIcon}></img>
              </div>
              <input 
                className="rounded-full bg-[#151718] min-h-[48px] w-[260px] text-white text-[14px] italic pl-[40px]"
                placeholder="Search your coins..."
              ></input>
            </div>
            <div className="relative">
              <div className="absolute flex flex-row gap-1 items-center top-[16px] left-[8px]">
                <img src={BellIcon}></img>
                <span className="text-white text-[16px]">15</span>
              </div>
              <img src={Notification} className=""></img>
            </div>
            <div className="relative">
              <div className="absolute flex flex-row gap-1 items-center top-[16px] left-[8px]">
                <img src={MessageIcon}></img>
                <span className="text-white text-[16px]">3</span>
              </div>
              <img src={Notification} className=""></img>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <img src={ProfileImgTemp}></img>
              <div className="flex flex-row items-center gap-2">
                <span className="text-white text-[14px]">Eric</span>
                <img src={DownIcon}></img>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default UserLayout