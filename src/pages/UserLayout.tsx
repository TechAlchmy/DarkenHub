import { useState } from "react";
import { Outlet} from "react-router-dom";
import { motion } from "framer-motion";

import DashBoardHearder from "../components/layouts/header"
import SideBar from "../components/layouts/siderBar"
import ChatField from "../components/layouts/ChatField"
// import GlobalChat from "../components/layouts/GlobalChatPro"
import Footer from "../components/Footer"
import LayoutBg from "../assets/userlayout/Group 1261152754.png";
const UserLayout = () => { 
  const [headerState, setHeaderState] = useState<boolean>(true);
  const [chatState, setChatState] = useState<boolean>(true);
  
  // const gradientBorderStyle = {
  //   backgroundImage: `url(${LayoutBg})`,
  //   backgroundPosition: '200px -200px', // Set specific position here
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  // }
  // const gradientBorderStyle1 = {
  //   backgroundImage: `url(${LayoutBg})`,
  //   backgroundPosition: 'center -400px', // Set specific position here
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  // }
  return (
    <motion.div className="flex relative">
      <SideBar toggle={headerState} />
      <div className={`w-full min-h-screen ease-in-out duration-500 overflow-hidden bg-[#0D0D0D] ${headerState ? "ml-[250px]" : "ml-[120px]"}`}>
        <div className={`ease-in-out duration-500 ${chatState ? "mr-[80px]" : "mr-[300px]"}`}>
          <DashBoardHearder setState={setHeaderState} currentState={headerState} />
          <div className="mt-[79.5px]">
            <Outlet />
          </div>
        </div>
        <ChatField setState={setChatState} currentState={chatState}/>
        <div className={`px-24 relative ease-in-out duration-500 z-[2] ${chatState ? "mr-[80px]" : "mr-[300px]"}`}>
          <Footer />
        </div>
      </div>
      <div className="absolute w-full px-5 h-full left-0 top-0 overflow-hidden -z-20">
        <img className="w-full h-[1440px] left-[200px] top-[-200px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-400px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-600px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-800px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-1000px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-1200px] relative" alt="" src={LayoutBg} />  
        <img className="w-full h-[1440px] left-[200px] top-[-1400px] relative" alt="" src={LayoutBg} />
        <img className="w-full h-[1440px] top-[-1600px] relative" alt="" src={LayoutBg} />  
      </div>
    </motion.div>
  )
}

export default UserLayout