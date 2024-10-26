import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Dashlogo from "../../assets/dashboard/Vector.png"
import Minprice from "../../assets/dashboard/min_price.png"
import Addsymbol from "../../assets/dashboard/add.png"
import DashboardMenu from "../common/DashboardMenu"
import DashboardImg from "../../assets/dashboard/dashboard.png"
import Trading from "../../assets/dashboard/trading.png"
import Watchlist from "../../assets/dashboard/watchlist.png"
import Academy from "../../assets/dashboard/academy.png"
import Profile from "../../assets/dashboard/profile.png"
import Wallet from "../../assets/dashboard/wallet.png"
import Logout from "../../assets/dashboard/logout.png"

const SideBar = () => {
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
    <div className="w-[250px] relative bg-[#0D0D0D]  op px-6 py-6">
      <div className="flex flex-row items-center">
        <img src={Dashlogo} alt="" />
        <span className="text-white text-[24px]">arkenhub</span>
      </div>
      <div className="flex flex-row items-center gap-2 pl-8 mt-8">
        <img className="cursor-pointer" src={Minprice} alt="" />
        <span className="text-white text-[16px]">-$234.80</span>
        <div className="w-[30px] h-[30px] rounded-full border-2 border-[#212325] relative cursor-pointer">
          <img src={Addsymbol} className="absolute pl-[1px] pt-[1px]" alt="" />
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
          <img className="w-[22px] h-[22px]" src={Logout} alt="" />
          <span className="">LogOut</span>
        </div>
        <div className="mt-4 px-8">
          <span className="text-white text-[14px]">English</span>
        </div>
      </div>
      <div className="w-full h-[100vh] absolute bg-[#151617] opacity-40 left-0 top-0"></div>
    </div>
  )
}

export default SideBar;