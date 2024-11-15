import { useEffect, useState } from "react"
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

interface Props {
  toggle: boolean
}

const SideBar = ({ toggle }: Props) => {
  const navigate = useNavigate();
  const [ toogleValue, setToogleValue ] = useState<boolean>(false);
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
    {
      short: "transactionTable",
      source: Wallet,
      name: "Transactions",
    },
    {
      short: "raceTransaction",
      source: Wallet,
      name: "Auction",
    },
  ]
  
  useEffect(() => {
    setToogleValue(toggle);
    if (!localStorage.getItem("authToken")) {
      navigate("/signin");
    }
  })

  const onLogOut = (e: any) => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  }
  return (
    <div>
      <div className={`w-[250px] bg-[#0D0D0D] z-[1000] px-6 py-6 fixed h-full ease-in-out duration-500 ${toogleValue ? "translate-x-0": "translate-x-[-100%]"}`}>
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
          menus.map((menu, index) => {
            return <DashboardMenu key={menu.short} short={menus[index].short} source={menus[index].source} name={menus[index].name} />
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
      <div className={`w-[130px] bg-[#0D0D0D] px-6 py-6 fixed h-full ease-in-out duration-500 ${toogleValue ? "translate-x-[-130px]" : "translate-x-0"}`}>
        <div className="flex justify-center items-center">
          <img src={Dashlogo} alt="" />
        </div>
        <div className="flex justify-center items-center mt-8">
          <img className="cursor-pointer" src={Minprice} alt="" />
        </div>
        {
          menus.map((menu, index) => {
            return <DashboardMenu key={menu.short} short={menus[index].short} source={menus[index].source} name={""} />
          })
        }
        <div className="mt-48">
          <div 
            className="mt-4 min-h-[48px] px-8 py-2 flex flex-row items-center gap-3 text-white text-[14px] cursor-pointer"
            onClick={onLogOut}
          >
            <img className="w-[22px] h-[22px]" src={Logout} alt="" />
          </div>
        </div>
        <div className="w-full h-[100vh] absolute bg-[#151617] opacity-40 left-0 top-0"></div>
      </div>
    </div>
  )
}

export default SideBar;