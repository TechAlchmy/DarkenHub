import { Outlet} from "react-router-dom"

import DashBoardHearder from "../components/layouts/header"
import SideBar from "../components/layouts/siderBar"
import GlobalChat from "../components/layouts/GlobalChatPro"
import Footer from "../components/Footer"
import LayoutBg from "../assets/userlayout/Group 1261152754.png";
const UserLayout = () => { 
  
  const gradientBorderStyle = {
    backgroundImage: `url(${LayoutBg})`,
    backgroundPosition: '200px -200px', // Set specific position here
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  const gradientBorderStyle1 = {
    backgroundImage: `url(${LayoutBg})`,
    backgroundPosition: 'center -400px', // Set specific position here
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <div className="flex relative">
      <SideBar />
      <div className="w-[calc(100%-250px)] min-h-screen bg-[#0D0D0D]">
        <DashBoardHearder />
        <Outlet />
        <div className="px-24 relative z-[2]">
          <Footer />
        </div>
      </div>
      <div className="absolute w-full px-5 h-full left-0 top-0 overflow-hidden -z-1">
        <img className="w-full h-[1440px] left-[200px] top-[-200px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-400px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-600px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-800px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-1000px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-1200px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-1400px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-1600px] relative" alt="" src={LayoutBg} />  
      </div>
    </div>
  )
}

export default UserLayout